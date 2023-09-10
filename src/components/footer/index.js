import { Container, Row, Col, Button } from "react-bootstrap"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

import logo from '../../images/logo.png'
import ufo from '../../images/Vp3M.gif'

export const Footer = () => {
    return(
        <Container>
        <footer className="footer">
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <img src={logo} style={{ height:'50%', width:'30%' }}></img>
            <p>Your digital vision, my code – Let's build something amazing together.</p>
          </MDBCol>
          <MDBCol md="4">
               <img src={ufo} />
          </MDBCol>
          <MDBCol md={4}>
          <h5 className="title">Social Media</h5>
            <ul className="sosmed-footer">
            <li className="list-unstyled">
            <BsInstagram /><span>KurniawanP08</span>
              </li>
              <li className="list-unstyled">
               <BiLogoGmail /> <span>kurniawanpranajaya@gmail.com</span>
              </li>
              <li className="list-unstyled">
              <BsTwitter /><span>KurniawanP08</span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Ignatius Kurniawan
        </MDBContainer>
      </div>
    </MDBFooter>
        </footer>
        </Container>
    )
}