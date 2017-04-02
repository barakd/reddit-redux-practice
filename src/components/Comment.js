import React, {Component, PropTypes} from 'react'
import Comments from './Comments';
import VotesCount from './VotesCount';
import SubmissionInfo from './base/SubmissionInfo';

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes
      .shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      for: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      author: PropTypes.object.isRequired,
      score: PropTypes.number.isRequired,
      comments: PropTypes.array.isRequired
    })
      .isRequired,
    onVote: PropTypes.func.isRequired,
    onReply: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.handleVote = this
      .handleVote
      .bind(this);
    this.handleReply = this
      .handleReply
      .bind(this);
  }

  render() {
    const {comment, onReply, onVote} = this.props;
    return (
      <article style={{
        padding: '20px'
      }}>
        <section
          style={{
          display: 'flex',
          flexFlow: 'row'
        }}>
          <div>
            <VotesCount score={comment.score} onVote={this.handleVote}/>
          </div>
          <div >
            <p>{comment.text}</p>
            <small><SubmissionInfo author={comment.author.userName} time={comment.createdAt}/></small>
            <Comments
              comments={comment.comments}
              onVote={onVote}
              onReply={onReply}
              shouldExpand={true}
              replyToCurrent={this.handleReply}/>
          </div>
        </section>
        <section></section>
      </article>
    );
  }

  handleVote(scoreToAdd) {
    this
      .props
      .onVote('comment', this.props.comment.id, scoreToAdd);
  }

  handleReply() {
    this
      .props
      .onReply('comment', this.props.comment.id);
  }
}
