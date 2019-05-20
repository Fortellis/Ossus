const INDEX_MOCK = {
  pages: [
    {
      name: 'overview',
      label: 'Overview',
      sections: [
        {
          name: 'getting-started',
          label: 'Getting Started',
          documents: ['installation', 'basics']
        }
      ]
    },
    {
      name: 'api',
      label: 'API',
      sections: [
        {
          name: 'intro',
          label: 'Introduction',
          documents: ['basics']
        }
      ]
    }
  ]
};

const DOCUMENT_MOCK = `---
title: TEST TITLE
author: Jared Jones
last updated: Today
---

Test File.
`;

module.exports = {
  INDEX_MOCK,
  DOCUMENT_MOCK
};
