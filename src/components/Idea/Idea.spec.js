import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

import { Idea } from './Idea';

const deleteIdeaMock = jest.fn();
const editIdeaMock = jest.fn();
const actions = {
  deleteIdea: deleteIdeaMock,
  editIdea: editIdeaMock
};
const ID = 'some Id';
const requiredProps = {
  id: ID,
  createdDate: 'someDate',
  body: 'the body',
  title: 'this title here',
  actions
};

describe('Given an Idea component', () => {
  describe('when it is rendered', () => {
    beforeEach(() => {
      deleteIdeaMock.mockReset();
      editIdeaMock.mockReset();
    });
    it('should match the snapshot', () => {
      const wrapper = shallow(<Idea {...requiredProps} />);

      expect(wrapper.getElement()).toMatchSnapshot();
    });

    describe('and delete idea is clicked', () => {
      it('should trigger a deleteIdea action', () => {
        const wrapper = shallow(<Idea {...requiredProps} />);

        wrapper.find(Button).simulate('click');

        expect(deleteIdeaMock).toHaveBeenCalledWith(ID);
      });
    });

    describe('and the component is double clicked', () => {
      it('should trigger an editIdea action', () => {
        const wrapper = shallow(<Idea {...requiredProps} />);

        wrapper.find('li').simulate('doubleClick');

        expect(editIdeaMock).toHaveBeenCalledWith(ID);
      });
    });
  });
});
