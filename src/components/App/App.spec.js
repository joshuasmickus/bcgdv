import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('Given an app component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
