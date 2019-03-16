import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

const onClickMock = jest.fn();
const requiredProps = {
  onClick: onClickMock,
  children: 'here'
};

describe('Given a Button component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(<Button {...requiredProps} />);

      expect(wrapper.getElement()).toMatchSnapshot();
    });

    describe('and the button is clicked', () => {
      it('should trigger the onClick prop', () => {
        const wrapper = shallow(<Button {...requiredProps} />);

        wrapper.find('button').simulate('click');

        expect(onClickMock).toHaveBeenCalledWith();
      });
    });
  });
});
