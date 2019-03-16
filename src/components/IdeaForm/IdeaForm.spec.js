import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

import { IdeaForm } from './IdeaForm';

const finishedEditingMock = jest.fn();
const updateIdeaMock = jest.fn();
const actions = {
  finishedEditing: finishedEditingMock,
  updateIdea: updateIdeaMock
};
const idea = {
  id: 'something',
  createdDate: 'today',
  title: 'my idea',
  body: 'something under 140 chars'
};

describe('Given an IdeaForm component', () => {
  describe('when it is rendered', () => {
    beforeEach(() => {
      finishedEditingMock.mockReset();
      updateIdeaMock.mockReset();
    });

    it('should match the snapshot', () => {
      const wrapper = shallow(<IdeaForm actions={actions} idea={idea} />);

      expect(wrapper.getElement()).toMatchSnapshot();
    });

    describe('and the done button is clicked', () => {
      it('should trigger finishedEditing action', () => {
        const preventDefaultMock = jest.fn();
        const wrapper = shallow(<IdeaForm actions={actions} idea={idea} />);

        wrapper.find(Button).simulate('click', { preventDefault: preventDefaultMock });

        expect(finishedEditingMock).toHaveBeenCalledWith();
        expect(preventDefaultMock).toHaveBeenCalledWith();
      });
    });
  });
});
