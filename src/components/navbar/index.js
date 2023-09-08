import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//IMPORT IMAGES
import linkedin from '../../images/linkedin.jpg'
import logo from '../../images/logo.png'
import instagram from '../../images/instagram.jpg';
import github from '../../images/github.jpg'

function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    const scrollToContact = () => {
      const contactSection = document.querySelector('.contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

useEffect(() => {
    const onScroll = () =>{
        if (window.scrollY>50){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    window.addEventListener("scroll", onScroll)

    return()=> window.removeEventListener("scroll", onScroll)
},[])

const onUpdateActiveLink =(value)=>{
    setActiveLink(value)
}

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
      <Navbar.Brand href="#home">
      <img src={logo} style={{ width: '50px', height:'50px' }} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/ignatius-kurniawan-73a50b191'target='_blank'><img src={linkedin} style={{ width:'25px', height:'25px' }} /></a>
              <a href='https://instagram.com/kurniawanp08?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=='target='_blank'><img src={instagram} style={{ width:'25px', height:'25px' }} /></a>
              <a href='https://github.com/sekrupman'target='_blank'><img src={github} style={{ width:'25px', height:'25px' }} /></a>
            </div>
            <button className='vvd'  style={{ height: "50px", width: "150px" }}onClick={scrollToContact}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;