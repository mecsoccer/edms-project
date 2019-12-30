import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { signup } from '../actions';
//import SignUpForm from '../SignUpForm';
//import { ReactComponent as Logo } from './img/logo-dark.svg';
//import '../styling/Signup.css';
//import '../styling/Responsive.css';

class Signup extends React.Component {
  onSubmit = (formValues) => {
    //this.props.signup(formValues);
  }

  render() {
    return (
      <div className="mask">
        <div className="logo-div">
            <Link to="/">
              EDMS
            </Link>
        </div>
        <div className="sign-up">
            <div className="page-title align-center accent-color1">Sign Up</div>
            {null/*<SignUpForm onSubmit={this.onSubmit} />*/}
        </div>
      </div>
    );
  }
}

export default connect(null, { /*signup*/ })(Signup);
