import React from 'react';

export default class CommentForm extends React.Component {

  static propTypes = {
    characterId: React.PropTypes.number,
    addComment: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      comment: '',
      sent: false
    };
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) } className="box box--default mrgt+">
        <p>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            className="form-control"
            value={ this.state.author }
            onChange={ this.handleChange.bind(this) }
            required />
        </p>
        <p>
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            id="comment"
            value={ this.state.comment }
            onChange={ this.handleChange.bind(this) }
            required />
        </p>
        <p>
          <button type="submit" className="btn btn--primary">Save comment</button>
          { this.state.sent && <span className="mrgl">Your comment has been saved!</span> }
        </p>
      </form>
    );
  }

  handleChange(e) {
    const value = e.target.value,
          name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { sent, ...comment } = this.state;

    this.props.addComment(comment);

    this.setState({
      author: '',
      comment: '',
      sent: true
    });
  }

}
