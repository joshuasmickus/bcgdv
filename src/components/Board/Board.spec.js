import React from 'react';
import { shallow } from 'enzyme';

import { Board } from './Board';

const getIdeasMock = jest.fn();
const newIdeaMock = jest.fn();
const actions = {
  getIdeas: getIdeasMock,
  newIdea: newIdeaMock
};

describe('Given a Board component', () => {
  describe('when it is rendered', () => {
    beforeEach(() => {
      getIdeasMock.mockReset();
    });

    it('should match the snapshot', () => {
      const wrapper = shallow(<Board actions={actions} ideas={[]} />);

      expect(wrapper.getElement()).toMatchSnapshot();
    });

    describe('and there are NO ideas', () => {
      it('should trigger getIdeas action', () => {
        shallow(<Board actions={actions} ideas={[]} />);

        expect(getIdeasMock).toHaveBeenCalledWith();
      });
    });

    describe('and there are ideas', () => {
      it('should trigger getIdeas action', () => {
        shallow(<Board actions={actions} ideas={[{}]} />);

        expect(getIdeasMock).not.toHaveBeenCalledWith();
      });
    });
  });
});
