import React, { Component } from 'react';
import { func, shape } from 'prop-types';

import { ideaShape } from '../../Constants/PropTypes';
import { finishedEditing, updateIdea } from '../../redux/ideas';

import Button from '../Button';

export class IdeaForm extends Component {
  state = {
    title: this.props.idea.title || '',
    body: this.props.idea.body || ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value});
  }

  handleBlur = (event) => {
    event.preventDefault();

    const { createdDate, id } = this.props.idea;
    const { body, title } = this.state;

    this.props.actions.updateIdea({ body, createdDate, id, title });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.actions.finishedEditing();
  }

  render() {
    const { body, title } = this.state;

    return (
      <form className="idea-form">
        <label>Title: </label>
        <input
          autoFocus
          type="text"
          name="title"
          value={title}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <label>Body: </label>
        <input
          type="text"
          name="body"
          value={body}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          maxLength="140"
        />
        <Button onClick={this.handleSubmit}>Done</Button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  actions: {
    finishedEditing: (idea) => dispatch(finishedEditing.request()),
    updateIdea: (idea) => dispatch(updateIdea.request(idea))
  }
})

IdeaForm.propTypes = {
  actions: shape({
    finishedEditing: func.isRequired,
    updateIdea: func.isRequired
  }).isRequired,
  idea: shape(ideaShape)
};
