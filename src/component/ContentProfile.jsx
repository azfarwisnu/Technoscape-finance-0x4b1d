import React from "react";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

import finlogo from "../styles/img/fint-black.png";
import bgProfile from "../styles/img/bg-profile.png";
import photoProfile from "../styles/img/photo-profile.png";

class ContentProfile extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className="head-section"
          >
            <Container>
              <Navbar.Brand href="#home">
                <img src={finlogo} alt="fin-logo" width="100" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#deets">Notifikasi</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="container mt-4 mb-4 pt-4 profile-section pb-4">
            <p>
              <b>Account Setting</b>
            </p>
            <div className="col-12">
              <img src={bgProfile} alt="bg-profile" />
            </div>
            <div className="row mx-4">
              <div className="col-3 left pb-4">
                <img src={photoProfile} alt="photoprofile" />
              </div>
              <div className="col-12 col-md-8 right">
                <h4>
                  <b>Udin Sanidin</b>
                  <hr className="text-success" />
                </h4>
                <div className="margin-top mt-4">
                  <div className="row">
                    <div className="col-4 col-md-3">
                      <span>Email</span>
                      <br />
                      <span>Nomor Telepon</span>
                      <br />
                      <span>Alamat</span>
                      <br />
                      <span>Provinsi</span>
                      <br />
                      <span>Kode Pos</span>
                      <br />
                    </div>
                    <div className="col-7 col-md-8 mx-2">
                      <b>udinsanidin12@gmail.com</b>
                      <br />
                      <b>083474928492</b>
                      <br />
                      <b>Jl.Padang mulya 13 RT 05/02</b>
                      <br />
                      <b>Jawa Barat</b>
                      <br />
                      <b>13715</b>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContentProfile;
