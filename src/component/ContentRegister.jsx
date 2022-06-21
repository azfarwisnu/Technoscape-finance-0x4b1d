import React from "react";

class ContentRegister extends React.Component {
  state = {
    position: "page-1",
    email: "",
    emailCheking: true,
    phonePasswordCheking: true,
    otp: "",
    telepon: "",
    password: "",
  };

  processPage1 = () => {
    if (this.state.email !== "" && this.state.email.includes("@")) {
      this.setState({ position: "page-2", emailCheking: true });
    } else {
      this.setState({ emailCheking: false });
    }
  };

  processPage2 = () => {
    if (this.state.otp !== "") {
      this.setState({ position: "page-3" });
    }
  };

  processPage3 = () => {
    if ((this.state.telepon !== "") & (this.state.password !== "")) {
      this.setState({ position: "finish-regist", phonePasswordCheking: true });
    } else {
      this.setState({ phonePasswordCheking: false });
    }
  };

  fetchInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container-fluid content-register col-11 col-md-5 mb-4 pb-4">
        <div className="text-center mb-4">
          <h4>
            <b>Daftar dulu, yuk</b>
          </h4>
        </div>
        {this.state.position === "page-1" ? (
          <>
            {this.state.emailCheking === false ? (
              <div className="alert alert-danger" role="alert">
                Gunakan format email
              </div>
            ) : null}
            <div className="bg-white border border-1 shadow-sm">
              <div className="mx-4 mt-4 pt-2 mb-4">
                <span>Ketikan alamat email</span>
                <div className="input-group mb-3 mb-4 pb-2 mt-1">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ketikan email anda"
                    name="email"
                    onChange={this.fetchInputHandler}
                  />
                </div>
                <button
                  className="btn col-12 btn-masuk"
                  onClick={this.processPage1}
                >
                  <span>
                    <b>Daftar</b>
                  </span>
                </button>
                <div className="bottom-register text-center text-muted pt-2 mt-4">
                  <p>
                    Sudah punya akun ?
                    <a href="/login" className="text-dark mx-1">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : this.state.position === "page-2" ? (
          <>
            <div className="alert alert-primary" role="alert">
              Buka email anda untuk kode OTP
            </div>
            <div className="bg-white border border-1 shadow-sm">
              <div className="mx-4 mt-4 pt-2 mb-4">
                <span>Ketikan kode OTP</span>
                <div className="input-group mb-3 mb-4 pb-2 mt-1">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.otp || ""}
                    placeholder="Ketikan kode OTP anda"
                    name="otp"
                    onChange={this.fetchInputHandler}
                  />
                </div>
                <button
                  className="btn col-12 btn-masuk"
                  onClick={this.processPage2}
                >
                  <span>
                    <b>Kirim OTP</b>
                  </span>
                </button>
                <div className="bottom-register text-center text-muted pt-2 mt-4">
                  <p>
                    Sudah punya akun ?
                    <a href="/login" className="text-dark mx-1">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : this.state.position === "page-3" ? (
          <>
            {this.state.phonePasswordCheking === false ? (
              <div className="alert alert-danger" role="alert">
                Ketikkan data dengan tepat
              </div>
            ) : null}
            <div className="bg-white border border-1 shadow-sm">
              <div className="mx-4 mt-4 pt-2 mb-4">
                <span>Ketikan nomer telepon</span>
                <div className="input-group mb-3 mb-4 pb-2 mt-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ketikan no telepon anda"
                    value={this.state.telepon || ""}
                    name="telepon"
                    onChange={this.fetchInputHandler}
                  />
                </div>
                <span>Ketikan password</span>
                <div className="input-group mb-3 mb-4 pb-2 mt-1">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ketikan password anda"
                    name="password"
                    onChange={this.fetchInputHandler}
                  />
                </div>
                <button
                  className="btn col-12 btn-masuk"
                  onClick={this.processPage3}
                >
                  <span>
                    <b>Daftar</b>
                  </span>
                </button>
                <div className="bottom-register text-center text-muted pt-2 mt-4">
                  <p>
                    Sudah punya akun ?
                    <a href="/login" className="text-dark mx-1">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : this.state.position === "finish-regist" ? (
          <>
            <div className="text-center alert alert-success" role="alert">
              Pendaftaran berhasil
            </div>
           <a href="/login" className="text-center text-dark"><p>Login?</p></a>
          </>
        ) : null}
      </div>
    );
  }
}

export default ContentRegister;
