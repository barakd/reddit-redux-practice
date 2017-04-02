import React from "react";
import { connect } from "react-redux";
import { push } from 'react-router-redux'
import CreateLinkForm from '../components/CreateLinkForm';
import {  addLink } from '../actions/links';

function CreateLinkContainer({ onSave, onCancel }) {
    return (<CreateLinkForm onSave={onSave} onCancel={onCancel} />);
}

const mapDispatchToProps = (dispatch) => {
    return {
      onCancel: () => dispatch(push('/')),
      onSave: (link) => {
          dispatch(addLink(link));
          dispatch(push('/'));
      },
  };
};

export default connect(null, mapDispatchToProps)(CreateLinkContainer);