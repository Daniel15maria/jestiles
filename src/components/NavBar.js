import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';


export const Navbarr = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : " "}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" style={{ width: '100px', marginRight: '10px', color: 'white' }} />
                    <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>JesTiles</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#About Us" className={activeLink === 'About Us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('About Us')}>About Us</Nav.Link>
                        <Nav.Link href="#Bricks" className={activeLink === 'Bricks' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Bricks')}>Bricks</Nav.Link>
                        <Nav.Link href="#Gallery" className={activeLink === 'Gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Gallery')}>Gallery</Nav.Link>
                        <Nav.Link href="#Usedto" className={activeLink === 'Education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Usedto')}>Used To</Nav.Link>
                        <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>



                    </Nav>
                    <span className="navbar-text">
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/maria-daniel-s-106360234/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/triCKY05"><img src={navIcon2} alt="" /></a>
                            <a href="https://wa.me/8531864229"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
