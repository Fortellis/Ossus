import React from 'react';
import { ConfigProvider, withConfig } from '../../src/Configurator';
import renderer from 'react-test-renderer';
// Mocks
import { MOCK_CONFIG, MOCK_TOC, MOCK_CONFIG_COMPONENT } from '../mocks';
const MockConsumer = withConfig(MOCK_CONFIG_COMPONENT);

describe('Configurator', () => {
  test('The Configurator provides config to a consuming component below it', () => {
    const component = renderer.create(
      <ConfigProvider
        site={MOCK_CONFIG.site}
        theme={MOCK_CONFIG.theme}
        toc={MOCK_TOC}
      >
        <MockConsumer />
      </ConfigProvider>
    );
    const componentInstance = component.root;

    expect(componentInstance.findByType(MOCK_CONFIG_COMPONENT).props).toEqual({
      config: {
        site: MOCK_CONFIG.site,
        theme: MOCK_CONFIG.theme,
        toc: MOCK_TOC,
      }
    });
  });
});
