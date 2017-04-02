import React from "react";
import {connect} from "react-redux";
import Title from '../components/base/Title';
import Button from '../components/base/Button';
import {login as loginAction} from '../actions/user';
function LoginContainer({login}) {
  let inputRef;
  return <section style={{
    textAlign: 'center'
  }}>
    <Title>
      Please Enter Username:
    </Title>
    <section>
      <form onSubmit={(e) => { e.preventDefault(); login(inputRef.value); }}>
        <input
          type="text"
          ref={(input) => inputRef = input}
          autoFocus="true"
          style={{
          marginTop: '10px'
        }}/>
        <Button type="submit">Login</Button>
      </form>
    </section>
  </section>
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      if (user) {
        dispatch(loginAction(user));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(LoginContainer);