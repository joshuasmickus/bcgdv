import React, { PureComponent, Fragment } from 'react';
import { arrayOf, func, shape } from 'prop-types';

import { ideaShape } from '../../Constants/PropTypes';
import { getIdeas, newIdea } from '../../redux/ideas';

import Button from '../Button';
import Ideas from '../Ideas';

import addButton from './add.png';

export class Board extends PureComponent {
  componentDidMount() {
    const { actions, ideas } = this.props;

    ideas.length === 0 && actions.getIdeas();
  }

  render() {
    const { actions, ideas } = this.props;

    return (
      <Fragment>
        <h1>Idea Board</h1>
        <Button onClick={actions.newIdea} className="new-idea">
          <img src={addButton} alt="add-button" className="add-button" />
        </Button>
        <Ideas ideas={ideas} />
      </Fragment>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  actions: {
    getIdeas: () => dispatch(getIdeas.request()),
    newIdea: () => dispatch(newIdea.request())
  }
})

export const mapStateToProps = ({ ideas }) => ({
  ideas
});

Board.propTypes = {
  actions: shape({
    getIdeas: func.isRequired,
    newIdea: func.isRequired
  }).isRequired,
  ideas: arrayOf(shape(ideaShape))
};
