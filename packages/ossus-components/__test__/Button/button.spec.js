import React from 'react';
import { mount } from 'enzyme';
// COmponents
import Button from '../../src/components/Button';
import { Layout } from '../../src/components/Layout';

describe('<Button />', () => {
  test('renders a button', () => {
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Button />
      </Layout>
    );

    expect(wrapper.find('button')).toHaveLength(1);
  });

  test('button renders text passed as children', () => {
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Button>Click Me!</Button>
      </Layout>
    );

    expect(wrapper.find('button').text()).toEqual('Click Me!');
  });

  test('button renders elements passed as children', () => {
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Button>
          <div>Click Me!</div>
        </Button>
      </Layout>
    );

    expect(wrapper.find('button').children()).toHaveLength(1);
    expect(wrapper.find('button').contains(<div>Click Me!</div>)).toBe(true);
  });

  test('button handles click events', () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <Layout config={{ theme: {}, site: {} }}>
        <Button onClick={handleClick}>
          Click Me!
        </Button>
      </Layout>
    );
    wrapper.find('button').simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
