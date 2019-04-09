import React from 'react';
import MarkdownRenderer from '../../src/MarkdownRenderer';
import renderer from 'react-test-renderer';
// Mocks
import { MOCK_MD, MOCK_FRONT, MOCK_MENU, MOCK_COMPONENTS } from '../mocks';

describe('MarkdownRenderer', () => {
  test('MarkdownRenderer renders markdown correctly', () => {
    const component = renderer.create(<MarkdownRenderer content={MOCK_MD} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('MarkdownRenderer renders markdown correctly given components', () => {
    const component = renderer.create(
      <MarkdownRenderer content={MOCK_MD} components={MOCK_COMPONENTS} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('MarkdownRenderer correctly set the watcher functions', () => {
    const mock_menu = jest.fn();
    const mock_front = jest.fn();

    renderer.create(
      <MarkdownRenderer
        content={MOCK_MD}
        menuCallback={mock_menu}
        frontCallback={mock_front}
      />
    );

    // Test Menu
    expect(mock_menu.mock.calls.length).toBe(1);
    expect(mock_menu.mock.calls[0][0]).toEqual(MOCK_MENU);
    expect(mock_front.mock.calls.length).toBe(1);
    // Test FrontMatter
    const front = mock_front.mock.calls[0][0];
    expect(front.title).toBe(MOCK_FRONT.title);
    expect(front.author).toBe(MOCK_FRONT.author);
    expect(front.update).toBe(MOCK_FRONT.update);
  });
});
