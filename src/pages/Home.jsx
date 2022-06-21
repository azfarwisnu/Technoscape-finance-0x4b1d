import React from "react";

import WelcomeHome from "../component/WelcomeHome";
import ContentHome from "../component/ContentHome";

import { connect } from "react-redux";
import {getLogin} from "../redux/actions/getData"

class Home extends React.Component {
  state = {
    login: false
  }

  render() {
    return (
      <>
      {
        this.props.loginStatus ? 
        <>
        <ContentHome />
        </>
        :
        <WelcomeHome />
      }
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loginStatus: state.user.loginStatus,
  }
}

const mapDispatchToProps = {
  getLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
