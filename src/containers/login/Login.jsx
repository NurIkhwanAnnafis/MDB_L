import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, emailValid, renderField } from '@components/field/Field';
import { Button } from 'reactstrap';
import { withRouter } from 'next/router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div className="wrapper">
        <div className="main banner-login" style={{ height: '100vh' }}>
          <div className="d-flex justify-content-left align-items-center h-100">
            <div className="ml-5 col-md-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Field
                  name="username"
                  type="text"
                  component={renderField}
                  label="Username"
                  id="Username"
                  validate={[required]}
                />
                <Field
                  name="password"
                  type="password"
                  component={renderField}
                  label="Password"
                  id="Password"
                  validate={[required]}
                />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-md-3 p-0 text-left">
                    <Button type="submit" color="primary">
                      Login
                    </Button>
                  </div>
                  <div className="col p-0 text-right">
                    <a
                      href="https://www.themoviedb.org/account/signup"
                      target="_blank"
                    >
                      Dont have account?
                    </a>
                    <span>
                      &nbsp;/&nbsp;
                      <a
                        href="https://www.themoviedb.org/account/reset-password"
                        target="_blank"
                      >
                        Forgot password
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(reduxForm({ form: 'loginForm' })(Login));
