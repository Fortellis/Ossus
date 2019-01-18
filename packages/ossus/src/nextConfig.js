function generatePathMap(tocs, paths) {
  return async () => {
    const docToc = tocs.docs;
    const blogToc = tocs.blog;

    return {
      '/': { page: '/' },
      '/404': { page: '/_error' },
      ...paths,
      ...generateDocsMap(docToc),
      ...generateBlogMap(blogToc),
    };
  };
}

function generateBlogMap(blogToc) {
  if (!blogToc) return {};

  const reducer = (map, blog) => ({
    ...map,
    [`/blog/${blog.doc}`]: { page: '/blog', query: { post: blog.doc } }
  });

  return blogToc.reduce(reducer, {});
}

function generateDocsMap(docToc) {
  if (!docToc) return {};

  const pageKeys = Object.keys(docToc);
  const addDoc = (acc, route, obj) => ({ ...acc, [route]: obj });

  let docs = {};

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