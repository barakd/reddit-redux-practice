import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import { addVote } from '../actions/votes';
import { toggleAddCommentModal } from '../actions/comments';
import AddCommentContainer from './AddCommentContainer';
import AutodditLink from '../components/AutodditLink';
function LinksContainer({ onVote, onReply, links }) {
    return (
        <section>
            <AddCommentContainer /> 
            <header style={{ marginBottom: '10px', backgroundColor: 'black', padding: '10px', }}>
                <Link to="/new" style={{ color: 'white '}}>Add Link</Link>
            </header>
    {links.map(link => <AutodditLink
        key={link.id}
        link={link}
        onVote={onVote}
        onReply={onReply}    
      />)}
    </section>)
}

const mapDispatchToProps = (dispatch) => ({
    onVote: (entityType, idToVote, scoreToAdd) => { 
        dispatch(addVote(idToVote, entityType, scoreToAdd));
     },
    onReply: (entityType, idToReply) => {
        dispatch(toggleAddCommentModal({
            for: idToReply,
            entityType,
        }));
    },   
});

const mapStateToProps = (state) => {
    const mappedProps = {
        links: extendLinksWithComments(state),
    };   
    return mappedProps;
};
export default connect(mapStateToProps, mapDispatchToProps)(LinksContainer);


function extendLinksWithComments(state) {
    return Object.keys(state.links.data).map(linkId => {
        const link = state.links.data[linkId];
        const comments = link.comments
            .map(commentId => state.comments.data[commentId])   
            .map(comment => extendCommentWithComments(comment, state.comments.data));
        const linkWithComments = Object.assign({}, link, { comments });
        return linkWithComments;
    });
}

function extendCommentWithComments(comment, comments) {
    const extendedComment = Object.assign({}, comment);
    extendedComment.comments = comment.comments
        .map((commentId) => extendCommentWithComments(comments[commentId], comments));
    
    return extendedComment;
}
