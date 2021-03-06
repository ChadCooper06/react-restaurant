import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Hero from './Routes/Hero';

//the nav bar shows on every page and links to the various routes 
export default function App() {
  // Gets location object with hook.
  const location = useLocation();
  return (
    <>
      <div>
        <nav className='navBar'
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            position: 'relative',
            width: '100%',
            backgroundColor: '#E5A561',
            margin: '0',
          }}
        >
          <>
            <div>
              <h1 style={{
                fontFamily: 'cursive',
                fontSize: '35px',
                fontWeight: 'bold',
                alignSelf: 'start',
                textShadow: '1px 1px white',
                color: '#FF372D',
                margin: '10px',
              }}>AC</h1>
            </div>
            <div className='buttons'>
              <Link to="/"><button>Home</button></Link> {" "}
              <Link to="/Menu"><button>Menu</button></Link> {" "}
              <Link to="/Specials"><button>Specials</button></Link> {" "}
            </div>
          </>
        </nav>
      </div>

      {/* Display the hero on the homepage only */}
      {location.pathname === "/" && <Hero />}

      {/* Outlet is the same as using the props.children  */}
      <div className="main-content">
        <Outlet />
      </div>

      <footer>
        <p style={{
          margin: '0',
          fontSize: '20px',
          backgroundColor: '#EAB37A',
          textAlign: 'center',
        }}>Copyright 2022. This site made with React by Awesome Inc. student.</p>
      </footer>
    </>
  );
}
//the footer shows on every page
