import React, {Component, PropTypes} from 'react'
import Modal from 'react-modal';
import Title from './base/Title';
import Button from './base/Button';

function AddCommentModal({currentReply, onSave, closeModal}) {
    let textRef;
    return (
        <Modal isOpen={!!currentReply} onRequestClose={closeModal} contentLabel='add comment'>
            <section
                style={{
                display: 'flex',
                flexFlow: 'column',
                height: '100%',
            }}>
                <Title>Please Add Your Comment:</Title>
                <section style={{
                    flex: 1,
                    display: 'flex',
                    flexFlow: 'column',
                }}>
                    <textarea ref={input => textRef = input} style={{ flex: 1, margin: '10px 0'}} autoFocus="true" />
                </section>
                <footer
                    style={{
                    display: 'flex',
                    flexFlow: 'row'
                }}>
                    <Button onClick={() => onSave(textRef.value, currentReply)}>
                        Save
                    </Button>
                    <Button onClick={closeModal}>
                        Cancel
                    </Button>
                </footer>
            </section>
        </Modal>
    );
}
AddCommentModal.propTypes = {
    onSave: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default AddCommentModal;