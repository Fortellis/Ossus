import React from 'react';
import { mount } from 'enzyme';
// Components
import withDocRouting from '../../src/withDoc';
import { ConfigProvider, withConfig } from '../../src/Configurator';
// Mocks
import { MOCK_COMPONENT, MOCK_CONFIG, MOCK_TOC, MOCK_MD } from '../mocks';
const MOCK_DOC_COMPONENT = withConfig(withDocRouting(MOCK_COMPONENT));

describe('withDoc HOC', () => {
  test('withDoc provides the correct props', () => {
    const component = mount(
      <ConfigProvider
        site={MOCK_CONFIG.site}
        theme={MOCK_CONFIG.theme}
        toc={MOCK_TOC}
      >
        <MOCK_DOC_COMPONENT
          content={MOCK_MD}
          page="mock_page"
          section="test"
          doc="mock-document"
        />
      </ConfigProvider>
    );
    let props = component.find(MOCK_COMPONENT).props();

    expect(props.menu).toBe(undefined);
    expect(props.front).toBe(undefined);
    expect(props.activeHeader).toBe('');
    expect(props.prevDoc).toBe(null);
    expect(props.nextDoc).toBe(null);
    expect(typeof props.watchMenu).toBe('function');
    expect(typeof props.watchFront).toBe('function');
    expect(typeof props.watchScroll).toBe('function');

    // Update component with watchers
    props.watchMenu('test');
    props.watchFront('test');
    props.watchScroll('test');
    component.update();
    props = component.find(MOCK_COMPONENT).props();

    expect(props.menu).toBe('test');
    expect(props.front).toBe('test');
    expect(props.activeHeader).toBe('test');
  });
});
