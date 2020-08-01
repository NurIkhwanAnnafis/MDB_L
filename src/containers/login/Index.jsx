import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import { LoginAction, RequestTokenAction } from '../../store/auth/auth.action';
import Login from './Login';

class IndexLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.RequestTokenAction();
  }

  onSubmit = value => {
    this.props.LoginAction(value.username, value.password, () =>
      Router.push('/demo')
    );
  };

  render() {
    const otherFunction = {
      onSubmit: this.onSubmit
    };

    return <Login {...this.props} {...this.state} {...otherFunction} />;
  }
}

const mapStateToProps = state => ({
  data: state.auth
});

const mapDispatchToProp = {
  LoginAction,
  RequestTokenAction
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProp)(IndexLogin)
);
