import React, { Component, PropTypes } from 'react'
import styled from 'styled-components';
import Title from './base/Title';
import SubmissionInfo from './base/SubmissionInfo';
import Thumbnail from './base/Thumbnail';
import VotesCount from './VotesCount';
import Comments from './Comments';
export default class AutodditLink extends Component {
  static propTypes = {
    link: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      author: PropTypes.object.isRequired,
      score: PropTypes.number.isRequired,
      comments: PropTypes.array.isRequired, 
    }).isRequired,
    onVote: PropTypes.func.isRequired,
    onReply: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
    this.handleReply = this.handleReply.bind(this);
  }
  
  render() {
    const columnStyle = {
      float: 'left',
      paddingRight: '10px',
    };
    const { link, onReply, onVote} = this.props;
    return (
      <article style={{ marginBottom: '10px' }}>
          <div style={columnStyle}>
            <VotesCount score={link.score} onVote={this.handleVote} />
          </div>
            <Thumbnail src={link.img} style={columnStyle} />
            <section>
            <Title><a href={link.url} target="_blank">{link.title}</a></Title>
            <SubmissionInfo author={link.author.userName} time={link.createdAt} />
              <Comments
                comments={link.comments}
                onReply={onReply}
                onVote={onVote}
                replyToCurrent={this.handleReply}
              />
          </section>
      </article>
    );
  }

  handleVote(scoreToAdd) {
    this.props.onVote('link', this.props.link.id, scoreToAdd);
  }

    handleReply() {
    this.props.onReply('link', this.props.link.id);
  }
}
