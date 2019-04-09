import React from 'react';
import { mount } from 'enzyme';
// Components
import { Title, Subtitle } from '../../src/components/Title';
import { Layout } from '../../src/components/Layout';

describe('<Title />', () => {
  test('should render an H1', () => {
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Title />
      </Layout>
    );

    expect(wrapper.find('h1')).toHaveLength(1);

  });

  test('should render given text', () => {
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Title>I am a title</Title>
      </Layout>
    );

    expect(wrapper.find('h1').text()).toEqual('I am a title');
  });
});

describe('<Subtitle />', () => {
  test('should render an H2', () => {
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Subtitle />
      </Layout>
    );

    expect(wrapper.find('h2')).toHaveLength(1);

  });

  test('should render given text', () => {
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Subtitle>I am a subtitle</Subtitle>
      </Layout>
    );

    expect(wrapper.find('h2').text()).toEqual('I am a subtitle');
  });
});