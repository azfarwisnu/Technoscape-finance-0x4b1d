import React from "react";

import { connect } from "react-redux";
import {getLogin} from "../redux/actions/getData"

class ContentLogin extends React.Component {

  fetchLogin = (tab) => {
    window.location.href = "/"
  }

  render() {
    return (
      <>
        <div className="container-fluid content-login col-11 col-md-4 mb-4 pb-4">
          <div className="text-center">
            <h3>
              <b>Masuk</b>
            </h3>
            <p className="text-muted">Ayo hemat uangmu.</p>
          </div>
          <div className="input-box pt-4 mt-4 pb-4">
            <span>Email</span>
            <div className="input-group mb-3 mb-4 pb-2 mt-1">
              <input
                type="email"
                className="form-control"
                placeholder="Ketikan email anda"
              />
            </div>
            <span>Password</span>
            <div className="input-group mb-3 mb-4 mt-1">
              <input
                type="password"
                className="form-control"
                placeholder="Ketikan kata sandi anda"
              />
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <input className="form-check-input" type="checkbox" />
                <label className="text-muted mx-2">Ingat saya</label>
              </div>
              <div>
                <span className="text-muted">
                  <a href="/forgetpassword" className="text-dark">
                    lupa password?
                  </a>
                </span>
              </div>
            </div>
          </div>
          <button className="btn col-12 mb-4 btn-masuk mt-4" onClick={() => this.fetchLogin(true)}>
            <h4 className="pt-3">
              <b>Masuk</b>
            </h4>
          </button>
          <div className="bottom-login text-center text-muted pt-2">
            <p>
              Belum punya akun ?
              <a href="/register" className="text-dark mx-1">
                Daftar
              </a>
            </p>
            <p>Atau login melalui</p>
            <span>
              <i className="bi bi-google h5"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.user.loginStatus
  }
}

const mapDispatchToProps = {
  getLogin,
}

export default connect (mapStateToProps, mapDispatchToProps)(ContentLogin);
