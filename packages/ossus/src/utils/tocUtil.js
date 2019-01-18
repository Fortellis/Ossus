// Docs utility for interacting with the site structure
function tocUtil(tocs) {
  const docToc = tocs.docs;
  const blogToc = tocs.blog;

  const getBlogPosts = () => {
    return blogToc;
  };

  const getBlogPost = (blog) => {
    const filter = blogToc.filter(post => post.doc === blog);
    return filter.length ? filter[0] : undefined;
  };

  const pageExists = (page) => {
    if (docToc.hasOwnProperty(page)) {
      return true;
    }
    return false;
  };

  const getPageDocs = (page) => {
    if (pageExists(page)) {
      const contents = docToc[page].sections;
      return [].concat(...contents.map(section => {
        return section.children.map(child => {
          return {
            ...child,
            section: section.route,
            page
          };
        });
      }));
    }
    return [];
  };

  const getFirstDoc = (page) => {
    return getPageDocs(page)[0];
  };

  const getSurroundingDocs = (page, doc) => {
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
  };

  const getDoc = (page, doc) => {
    return getPageDocs(page).find(d => d.doc === doc);
  };

  const getPage = (page) => {
    if (pageExists(page)) {
      return docToc[page];
    }
    return {};
  };

  const getTopPages = () => {
    return Object.keys(docToc).map(doc => {
      const obj = docToc[doc];
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
      };
    });
  };

  // External Utility Functions
  return {
    // Returns an array of all docs on a page and attaches the section
    getPageDocs,
    // Gets the first doc from a page
    getFirstDoc,
    // Gets the surround (next and previous) documents
    getSurroundingDocs,
    // Finds a specific document in a page
    getDoc,
    // Gets the structure details for a given page (metadata, sections, documents)
    getPage,
    // Get the top level pages
    getTopPages,
    // Get a specific blog post
    getBlogPost,
    getBlogPosts
  };
}

export default tocUtil;