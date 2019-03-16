import React, { PureComponent } from 'react';
import { arrayOf, shape } from 'prop-types';

import { ideaShape } from '../../Constants/PropTypes';

import Idea from '../Idea';
import IdeaForm from '../IdeaForm';

export class Ideas extends PureComponent {
  render() {
    const { ideas } = this.props;

    return (
      <ul className="ideas">
        {ideas.map(idea => {
          if (idea.isEditing) {
            return <IdeaForm key={idea.id} idea={idea} />
          }

          return <Idea key={idea.id} {...idea} />;
        })}
      </ul>
    );
  }
}

Ideas.propTypes = {
  ideas: arrayOf(shape(ideaShape))
};
