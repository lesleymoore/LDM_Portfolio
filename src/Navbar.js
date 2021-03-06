import React from 'react';
import './navbar.css'

  
const Navbar = (currentpage, Changepage) => {
  return (
      <div className="flex">
    <div className="navbar">
        <a href="/LDM_Portfolio"
         onClick={() => Changepage('About')}
         className={currentpage === 'About' ? "Navactive" : "NavLink"} >
             About Me </a>
     </div>
     <div className="navbar">
        <a href="/LDM_Portfolio/Portfolio"
         onClick={() => Changepage('Portfolio')}
         className={currentpage === 'Portfolio' ? "Navactive" : "NavLink"} >
             Portfolio</a>
     </div>
     <div className="navbar">
        <a href="/LDM_Portfolio/Contact"
         onClick={() => Changepage('Contact')}
         className={currentpage === 'Contact' ? "Navactive" : "NavLink"} >
             Contact Me </a>
     </div>
     <div className="navbar">
        <a href="/LDM_Portfolio/Resume"
         onClick={() => Changepage('Resume')}
         className={currentpage === 'Resume' ? "Navactive" : "NavLink"} >
             Resume</a>
     </div>

    </div>
  );
};
  
export default Navbar;