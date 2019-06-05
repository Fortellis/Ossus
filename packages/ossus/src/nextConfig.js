function generatePathMap(toc, paths) {
  return async () => {
    return {
      '/': { page: '/' },
      '/404': { page: '/_error' },
      ...paths,
      ...generatePaths(toc)
    };
  };
}

function generatePaths(toc) {
  let docs = {};
  // For each set of documents in toc build paths objects
  Object.entries(toc).forEach(([route, contents]) => {
    // Gather base documents with their locations intact
    const documents = getBaseDocuments(contents).reduce((acc, d) => {
      // The location contains the query params but need to be repeated
      const queryParams = d.location.split('/');
      const query = queryParams
        .slice(1, queryParams.length + 1) // Need to remove the leading empty item
        .reduce((acc, param, idx) => {
          return { ...acc, [idx]: param };
        }, {});

      return {
        ...acc,
        [`${route}${d.location}`]: { page: contents.page, query }
      };
    }, {});
    docs = { ...docs, ...documents };
  });

  return docs;
}

function getBaseDocuments(index) {
  const depth = index.depth;
  let collection = [index];
  for (let i = 0; i <= depth; i++) {
    collection = collection.reduce((acc, child) => {
      const children = getChildren(child).map(c => {
        const loc = child.location || '';
        return { ...c, location: `${loc}/${c.name}` };
      });
      return [...acc, ...children];
    }, []);
  }
  return collection;
}

function getChildren(object) {
  return object.children || [];
}

export default generatePathMap;
