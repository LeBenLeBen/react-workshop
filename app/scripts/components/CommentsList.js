import React from 'react';
import CommentForm from 'components/CommentForm';

export default class CommentsList extends React.Component {

  static propTypes = {
    characterId: React.PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      comments: JSON.parse(localStorage.getItem(this.props.characterId)) || []
    };
  }

  render() {
    return (
      <div className="mrgt+">
        <ul className="list list-stacked list-stacked--divided">
          { this.state.comments.map((comment, i) => {
            return (
              <li key={ i }>
                <p className="mrgv0"><strong>{ comment.author }</strong></p>
                <p className="mrgv0">{ comment.comment }</p>
              </li>
            );
          }) }
        </ul>
        <CommentForm characterId={ this.props.characterId } addComment={ this.addComment.bind(this) } />
      </div>
    );
  }

  addComment(comment) {
    const comments = this.state.comments.slice(0);

    comments.push(comment);

    this.setState({
      comments
    }, () => {
      localStorage.setItem(this.props.characterId, JSON.stringify(comments));
    });
  }

}
