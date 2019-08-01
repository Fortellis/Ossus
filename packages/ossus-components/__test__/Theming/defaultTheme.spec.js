import {
  generateDefaultTheme,
  mergeThemes,
  color,
  font
} from '../../src/defaultTheme';
// Variables
const TEST_THEME = {
  color: {
    primary: '#000'
  },
  font: {
    family: {
      body: 'Comic Sans, sans-serif'
    }
  }
};

function validateTheme(theme) {
  expect(theme).toHaveProperty('shadow');
  expect(theme).toHaveProperty('color');
  // Font
  expect(theme).toHaveProperty('font');
  expect(theme.font).toHaveProperty('family');
  expect(theme.font).toHaveProperty('size');
  expect(theme.font).toHaveProperty('weight');
  // Header
  expect(theme).toHaveProperty('header');
  expect(theme.header).toHaveProperty('title');
  expect(theme.header).toHaveProperty('link');
  // Code
  expect(theme).toHaveProperty('code');
  expect(theme.code).toHaveProperty('font');
  expect(theme.code).toHaveProperty('color');
  // Breadcrumbs
  expect(theme).toHaveProperty('breadcrumbs');
  expect(theme.breadcrumbs).toHaveProperty('font');
  expect(theme.breadcrumbs).toHaveProperty('color');
  // Table of Contents
  expect(theme).toHaveProperty('toc');
  expect(theme.toc).toHaveProperty('title');
  expect(theme.toc.title).toHaveProperty('font');
  expect(theme.toc.title).toHaveProperty('color');
  expect(theme.toc).toHaveProperty('item');
  expect(theme.toc.item).toHaveProperty('font');
  expect(theme.toc.item).toHaveProperty('color');
  // Menu
  expect(theme).toHaveProperty('menu');
  expect(theme.menu).toHaveProperty('font');
  expect(theme.menu).toHaveProperty('color');
  // Button
  expect(theme).toHaveProperty('button');
  expect(theme.button).toHaveProperty('font');
  expect(theme.button).toHaveProperty('color');
  // Paging
  expect(theme).toHaveProperty('paging');
  expect(theme.paging).toHaveProperty('font');
  expect(theme.paging).toHaveProperty('color');
  // Type
  expect(theme).toHaveProperty('type');
  expect(theme.type).toHaveProperty('table');
  expect(theme.type).toHaveProperty('frontmatter');
  expect(theme.type).toHaveProperty('list');
  expect(theme.type).toHaveProperty('a');
  expect(theme.type).toHaveProperty('p');
  expect(theme.type).toHaveProperty('heading');
  // Size
  expect(theme).toHaveProperty('size');
  expect(theme.size).toHaveProperty('width');
  expect(theme.size).toHaveProperty('height');
  expect(theme.size).toHaveProperty('unit');
}

describe('Default Theme', () => {
  test('generateDefaultTheme should output a valid theme object', () => {
    const theme = generateDefaultTheme(color, font);
    
    validateTheme(theme);
  });

  test('generateDefaultTheme should assign color and font values correctly', () => {
    const theme = generateDefaultTheme(color, font);
    // Test a few instances of assignment
    expect(theme.header.color).toEqual(color.primary);
    expect(theme.code.font.size).toEqual(font.size.body + font.size.unit);
    expect(theme.button.color.fg).toEqual(color.primary);
  });
});

describe('Merge Themes', () => {
  test('Merge themes should output a valid theme object', () => {
    const c = mergeThemes(color, TEST_THEME.color);
    const f = mergeThemes(font, TEST_THEME.font);
    const defaultTheme = generateDefaultTheme(c, f);
    const theme = mergeThemes(defaultTheme, TEST_THEME);

    validateTheme(theme);
  });

  test('Generated theme should have correctly overwritten values', () => {
    const c = mergeThemes(color, TEST_THEME.color);
    const f = mergeThemes(font, TEST_THEME.font);
    const defaultTheme = generateDefaultTheme(c, f);
    const theme = mergeThemes(defaultTheme, TEST_THEME);

    expect(theme.header.color).toEqual(TEST_THEME.color.primary);
    expect(theme.breadcrumbs.font.family).toEqual(TEST_THEME.font.family.body);
  });
});
