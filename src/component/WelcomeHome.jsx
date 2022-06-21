import React from "react";

import card from "../styles/img/card.png";

class WelcomeHome extends React.Component {
  render() {
    return (
      <>
        <div className="welcome-section">
          <div className="row container content-welcome">
            <div className="col-12 col-md-6 left mb-4">
              <div className="mx-4 content-left">
                <div className="col-11 col-md pb-4">
                  <h3 className="text-white">
                    <b>
                      Kelola <span className="green"> Keuangan </span>
                      anda dengan <span className="green"> Mudah </span>
                    </b>
                  </h3>
                </div>
                <a href="/register">
                  <button className="mt-2 btn col-8 btn-masuk">
                    <h4 className="mt-2">
                      <a href="/register" className="text-decoration-none">
                        <b className="text-dark ">Daftar</b>
                      </a>
                    </h4>
                  </button>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 content-right mb-4 pb-4">
              <img src={card} alt="card" className="mx-4" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WelcomeHome;
