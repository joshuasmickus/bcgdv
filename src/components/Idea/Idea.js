import React, { PureComponent } from 'react';
import { func, shape } from 'prop-types';

import { ideaShape } from '../../Constants/PropTypes';
import { deleteIdea, editIdea } from '../../redux/ideas';

import Button from '../Button';

import deleteIcon from './delete.png';

export class Idea extends PureComponent {
  handleDelete = () => {
    const { actions, id } = this.props;

    actions.deleteIdea(id);
  }

  handleDoubleClick = () => {
    const { actions, id } = this.props;

    actions.editIdea(id);
  }

  render() {
    const { id, title, body } = this.props;

    return (
      <li className={`idea ${id}`} onDoubleClick={this.handleDoubleClick}>
        <h3>{title}</h3>
        <p>{body}</p>
        <Button className="delete-button" onClick={this.handleDelete}>
          <img src={deleteIcon} alt="Delete" title="Delete" />
        </Button>
      </li>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  actions: {
    deleteIdea: (id) => dispatch(deleteIdea.request(id)),
    editIdea: (id) => dispatch(editIdea.request(id))
  }
})

Idea.propTypes = {
  ...ideaShape,
  actions: shape({
    deleteIdea: func.isRequired,
    editIdea: func.isRequired
  }).isRequired
};
