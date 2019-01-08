function generatePathMap(tocs) {
    const pageKeys = Object.keys(tocs);
    const addDoc = (acc, route, obj) => ({ ...acc, [route]: obj });
    let docs = {};
    // Accumulate the docs pathing information
    pageKeys.forEach(page => {
        tocs[page].sections.forEach(section => {
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