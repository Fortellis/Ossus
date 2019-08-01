import React from 'react';

export function MOCK_CONFIG_COMPONENT({ config }) {
  return <div name={config.site.name} />;
}

export function MOCK_COMPONENT() {
  return <div />;
}

export const MOCK_CONFIG = {
  site: {
    name: 'Test'
  },
  theme: {
    color: {
      primary: 'red'
    }
  }
};

export const MOCK_TOC = {
  docs: {
    mock_page: {
      label: 'Mock Page',
      sections: [
        {
          route: 'test',
          label: 'Test',
          children: [
            {
              doc: 'mock-document',
              label: 'Mock Document',
              author: 'Testy McTester',
              'last updated': '1/9/1996'
            }
          ]
        }
      ]
    }
  }
};

export const MOCK_PATH_MAP = {
  '/': { page: '/' },
  '/404': { page: '/_error' },
  '/docs/mock_page/test/mock-document': {
    page: '/doc',
    query: {
      doc: 'mock-document',
      page: 'mock_page',
      section: 'test'
    }
  }
};

export const MOCK_COMPONENTS = {
  a: 'a',
  p: 'div',
  h1: 'div',
  h2: 'p',
  h3: 'div'
};

export const MOCK_MENU = [
  { depth: 1, value: 'Test Title', id: 'test-title' },
  { depth: 2, value: 'Test Title 2', id: 'test-title-2' },
  { depth: 3, value: 'Test Title 3', id: 'test-title-3' }
];

export const MOCK_FRONT = {
  title: 'Test',
  author: 'Test',
  update: 'Test'
};

export const MOCK_MD = `---
title: Test
author: Test
last updated: Test
---

# Test Title

## Test Title 2

### Test Title 3

#### Test Title 4

Just a simple test paragraph

Test paragraph that has both **bold** and *italics*

[Fake Link](https://ossus.fortellis.io)

Paragraph with a [Fake Link](https://ossus.fortellis.io) embedded in it.

> A blockquote

![A Fake Image](https://fakeimage.com/test.png)`;
