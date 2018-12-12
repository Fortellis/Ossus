// Docs utility for interacting with the site structure
function docs(tocs) {
    // Private Utitlity Functions
    const pageExists = (page) => {
        if (tocs.hasOwnProperty(page)) {
            return true;
        }
        return false;
    }
    
    // External Utility Functions
    return {
        // Returns an array of all docs on a page and attaches the section
        getPageDocs(page) {
            if (pageExists(page)) {
                const contents = tocs[page].sections;
                return [].concat(...contents.map(section => {
                    return section.children.map(child => {
                        return {
                            ...child,
                            section: section.route,
                            page
                        }
                    })
                }));
            }
            return [];
        },

        // Gets the first doc from a page
        getFirstDoc(page) {
            return getPageDocs(page)[0];
        },

        // Gets the surround (next and previous) documents
        getSurroundingDocs(page, doc) {
            const docs = getPageDocs(page);
            // Find given doc
            const indexOf = docs.findIndex(d => d.doc === doc);
            return {
                nextDoc: (indexOf !== -1) && (indexOf + 1 < docs.length)
                    ? docs[indexOf + 1]
                    : null,
                prevDoc: (indexOf !== -1) && (indexOf - 1 >= 0)
                    ? docs[indexOf - 1]
                    : null,
            };
        },

        // Finds a specific document in a page
        getDoc(page, doc) {
            return getPageDocs(page).find(d => d.doc === doc);
        },

        // Gets the structure details for a given page (metadata, sections, documents)
        getPage(page) {
            if (pageExists(page)) {
                return tocs[page];
            }
            return {};
        },

        // Get the top level pages
        getTopPages() {
            return Object.keys(tocs).map(doc => {
                const obj = tocs[doc];
                return {
                    title: obj.label,
                    description: obj.description || 'Generic description',
                    link: {
                        route: 'docs',
                        params: {
                            page: doc,
                            doc: obj.sections[0].children[0].doc,
                            section: obj.sections[0].route
                        }
                    }
                }
            });
        }
    }
}

export default docs;