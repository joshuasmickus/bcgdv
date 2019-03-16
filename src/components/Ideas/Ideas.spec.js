import React from 'react';
import { shallow } from 'enzyme';

import { Ideas } from './Ideas';

const ideas = [{
  id: '11',
  'created_date': 'some date',
  title: 'title here',
  body: 'body here'
},
{
  id: '12',
  'created_date': 'some date',
  title: 'title here',
  body: 'body here'
},
{
  id: '13',
  'created_date': 'some date',
  title: 'title here',
  body: 'body here',
  isEditing: true
}];

describe('Given an Ideas component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(<Ideas ideas={ideas} />);

      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
