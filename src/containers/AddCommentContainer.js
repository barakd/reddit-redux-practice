import React from "react";
import { connect } from "react-redux";
import AddCommentModal from '../components/AddCommentModal';
import { toggleAddCommentModal, addComment } from '../actions/comments';

function AddCommentContainer({ currentReply, onSave, closeModal }) {
    return <AddCommentModal currentReply={currentReply} onSave={onSave} closeModal={closeModal} />
}

const mapStateToProps = (state) => ({
    currentReply: state.comments.addCommentsModalOpen,
    
});
const mapDispatchToProps = (dispatch) => {
  return {
      closeModal: () => {dispatch(toggleAddCommentModal(false))},
      onSave: (text, currentReply) => {
          const comment = {
              for: currentReply.for,
              text,
          }
          dispatch(addComment(comment, currentReply.entityType))
          dispatch(toggleAddCommentModal(false));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer);