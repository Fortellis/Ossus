const fs = require('fs');
const docDir = `documentation`;

function isHidden(file) {
    return file.slice(0,1) === '.';
}

function isDir(path) {
    return fs.statSync(path).isDirectory();
}

function isFile(path) {
    return fs.statSync(path).isFile();
}

// Extract metadata from frontmatter
function getFrontmatter(path) {
    let frontmatter = {}
    const md = fs.readFileSync(path, 'utf8');
    const re = /---\n((([^\n]+:)\s{1}[^\n]+\n)+)---/;
    const res = re.exec(md);
    let matches;
    const re2 = /([^\n]+):\s{1}([^\n]+)\n/g;
    while(matches = re2.exec(res[1])) {
        frontmatter[matches[1]] = matches[2];
    }
    return frontmatter;
}

function handleDoc(path, doc) {
    if (isFile(path) && !isHidden(doc)) {
        const fm = getFrontmatter(path);
        return {
            doc: doc.split('.')[0],
            label: fm && fm.title ? fm.title : doc
        }
    }
}

function handleSection(path, section) {
    if (isDir(path) && !isHidden(section.route)) {
        const indexPath = `${path}/index.json`;
        let children = [];
        if (fs.existsSync(indexPath)) {
            // pull and sort by index
            const index = require(indexPath);
            index.order.map(doc => {
                const docPath = `${path}/${doc}`;
                const child = handleDoc(docPath, doc);
                if (child) {
                    children.push(child);
                }
            });
        } else {
            // no index so pull all files
            const docs = fs.readdirSync(path);
            docs.forEach(doc => {
                const docPath = `${path}/${doc}`;
                const child = handleDoc(docPath, doc);
                if (child) {
                    children.push(child);
                }
            })
        }
        return {
            route: section.route,
            label: section.label,
            children
        };
    }
}

function handlePages() {
    let toc = {};
    // Get top level pages
    const index = require(`${docDir}/index.json`);
    Object.keys(index).forEach(page => {
        const path = `${docDir}/${page}`;
        if (isDir(path) && !isHidden(page)) {
            toc[page] = {
                label: index[page].label ? index[page].label : page,
                description: index[page].description ? index[page].description : '',
                sections: []
            }
            // Add sections under current page
            const indexPath = `${path}/index.json`;
            if (fs.existsSync(indexPath)) {
                // sort by index
                const index = require(indexPath);
                index.order.map(section => {
                    const sectionPath = `${path}/${section.route}`;
                    const newSection = handleSection(sectionPath, section);
                    if (newSection) {
                        toc[page].sections.push(newSection);
                    }
                });
            } else  {
                // no index so pull all directories
                const sections = fs.readdirSync(path);
                sections.forEach(section => {
                    // Get documentation pages in page section
                    const sectionPath = path + '/' + section;
                    const newSection = handleSection(sectionPath, { route: section, label: section });
                    if (newSection) {
                        toc[page].sections.push(newSection);
                    }
                });
            }
        }
    });
    return toc;
}

function Builder() {
    fs.writeFileSync(
        `${__dirname}/config/tableOfContents.js`,
        `module.exports = ${JSON.stringify(handlePages(), null, 4)}`
    );
    console.log('Wrote out table of contents!')
}

module.exports = Builder;