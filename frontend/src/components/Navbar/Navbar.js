import "./Navbar.css"
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../Redux/reducers/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Navbars = () => {
  const [moodstate, setMoodstate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispath = useDispatch();

  const logout = () => {
    setIsLoading(true);
    dispath(setLogout())
  };
  const state = useSelector((state) => {
    console.log();
    return {
      isLoggedIn: state.auth.isLoggedIn,
      token: state.auth.token,
      user_image: state.auth.user_image,
      craft: state.auth.userInfo.craft_id,
    };
  });
  
  let newTheme = moodstate ? "lightMood" : "darkMood";
  

  return (
    <>
     
    <div className="navBar-container">
      <Navbar collapseOnSelect expand="lg"  className="background-navbar">
      <Navbar.Brand style={{marginLeft:"5%"}} >
        <h3 className="header-logo" style={{
          display:'flex',
          fontFamily: "Roboto",
          letterSpacing:"0.8px",
          fontWeight:"999",
          lineHeight: "1",fontSize:"35px"
          }} onClick={()=>{navigate('/')}}>TasLee7<span className ="for-the-dot">.</span></h3> </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "flex-end" }}  >
          
          <Nav>
            {state.isLoggedIn?
            <>
             <Nav.Link style={{ fontSize: '18px',marginLeft:"-30%"}} onClick={()=>{navigate(`/`)}}className="each-navbar">Home </Nav.Link>
             
             <Nav.Link style={{ fontSize: '18px' }} className="each-navbar" onClick={()=>{navigate("/support")}}>Support </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} onClick={()=>{navigate(`/aboutus`)}}className="each-navbar">About us </Nav.Link>
            <NavDropdown id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{
                navigate("/Dashboard/provider")
              }}>Dashboard</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{
                navigate("/update/profile")
              }}>Account</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{
                navigate("/Chat")
              }}>Chat AI</NavDropdown.Item>
              {state.craft?
                <NavDropdown.Item onClick={()=>{navigate("/CreatePost")}}>Create Announcement</NavDropdown.Item>
                :<NavDropdown.Item onClick={()=>{navigate("/CreateCraft")}}>Join us</NavDropdown.Item>
              }
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
            
            <img
              src={state.user_image}
              alt="Profile Pic"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '20px', }}
            />
            </>
            :<>
             <Nav.Link style={{ fontSize: '18px',marginLeft:"-30%"}} onClick={()=>{navigate(`/`)}}className="each-navbar">Home </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} onClick={()=>{navigate(`/register`)}}className="each-navbar">Register </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} onClick={()=>{navigate(`/login`)}}className="each-navbar">Login </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} className="each-navbar" onClick={()=>{navigate("/support")}}>Support </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} onClick={()=>{navigate(`/aboutus`)}}className="each-navbar about-us">About us </Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    </>
  );
};

export default Navbars;
