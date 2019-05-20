// Imports
const fsUtil = require('../../utils/fsUtils');
const { docsBuilder } = require('../../builders/docsBuilder');
// Mocks
jest.mock('../../utils/fsUtils');
const { INDEX_MOCK, DOCUMENT_MOCK } = require('./mocks');
// Variables
const urlForm = '/:page/:section/:doc';

describe('Docs Builder', () => {
  const options = { directory: '/docs', route: '/documents' };

  beforeEach(() => {
    fsUtil.isFile.mockReturnValue(true);
    fsUtil.getPath.mockImplementation(path => path);
    fsUtil.readFile.mockReturnValue(DOCUMENT_MOCK);
    fsUtil.getFullPath.mockImplementation(path => path);
    fsUtil.readJsonFile.mockReturnValue(INDEX_MOCK);
  });

  test('Should throw error if missing index.json', () => {
    fsUtil.isFile.mockReturnValueOnce(false);
    try {
      docsBuilder(options);
    } catch (err) {
      expect(err.message).toEqual('Index.json is required to build structure.');
    }
  });

  test('Should throw error if missing documents defined in index', () => {
    fsUtil.isFile
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);
    try {
      docsBuilder(options);
    } catch (err) {
      expect(err.message).toEqual('Missing defined documents.');
      expect(err.documents).toHaveLength(1);
    }
  });

  test('Should throw error if fails to read/write document', () => {
    fsUtil.writeOut.mockImplementationOnce(() => { throw {}; });
    try {
      docsBuilder(options);
    } catch (err) {
      expect(err.message).toEqual('Failed to transform document.');
      //expect(err.document).stringContaining(INDEX_MOCK.pages[0].sections[0].documents[0]);
    }
  });

  test('Should output a correct TOC with valid input', () => {
    const toc = docsBuilder(options);
    // Ensure return values are valid
    expect(toc.route).toEqual(options.route + urlForm);
    expect(toc.pages).toHaveLength(INDEX_MOCK.pages.length);
    // Ensure toc object has correct properties
    for (let page of toc.pages) {
      expect(page).toHaveProperty('name');
      expect(page).toHaveProperty('label');
      expect(page).toHaveProperty('sections');
      for (let section of page.sections) {
        expect(section).toHaveProperty('name');
        expect(section).toHaveProperty('label');
        expect(section).toHaveProperty('documents');
        for (let document of section.documents) {
          expect(document).toHaveProperty('name');
          expect(document).toHaveProperty('path');
          expect(document).toHaveProperty('title');
          expect(document).toHaveProperty('author');
          expect(document).toHaveProperty('last updated');
        }
      }
    }
  });
});
