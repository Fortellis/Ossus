function generatePathMap(tocs) {
    const docToc = tocs.docs;
    const pageKeys = Object.keys(docToc);
    const addDoc = (acc, route, obj) => ({ ...acc, [route]: obj });
    let docs = {};
    // Accumulate the docs pathing information
    pageKeys.forEach(page => {
        docToc[page].sections.forEach(section => {
            section.children.forEach(doc => {
                docs = addDoc(docs, `/docs/${page}/${section.route}/${doc.doc}`, {
                    page: '/doc',
                    query: { page, section: section.route, doc: doc.doc }
                });
            });
        });
    });
    return docs;
}

export default generatePathMap;