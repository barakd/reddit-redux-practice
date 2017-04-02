import React, { Component, PropTypes } from 'react'
import TextAction from './base/TextAction';
import Comment from './Comment';
export default class Comments extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        onVote: PropTypes.func.isRequired,
        onReply: PropTypes.func.isRequired,
        replyToCurrent: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.handleReply = this.handleReply.bind(this);
        this.state = {
         expandComments: !!props.shouldExpand,
        };
        this.toggleComments = this.toggleComments.bind(this);  
    }

  toggleComments() {
    this.setState({ expandComments: !this.state.expandComments });
  }

handleReply() {
    this.props.onReply('comment', this.id);
}   
  
    render() {
        const { comments, onReply, onVote, replyToCurrent } = this.props;
        return (
            <article>
                <div>
                    <TextAction onClick={this.toggleComments}> {comments.length} comments</TextAction>
                    | <TextAction onClick={replyToCurrent}>Add Reply</TextAction> 
                </div>
                <div style={{ clear: 'both', } }>
                    {this.state.expandComments ? (comments.map(comment =>
                        <Comment
                            key={comment.id}
                            comment={comment}
                            onReply={onReply}
                            onVote={onVote}
                        />)) : ''}
                </div>
            </article>
        );
    }

}  

