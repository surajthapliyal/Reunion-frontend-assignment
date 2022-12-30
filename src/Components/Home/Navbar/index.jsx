import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import "./styles.css"

const Navbar = () => {
  return (
    <div className="navbar_content-wrap">
      <div className="logo"><DraftsIcon style={{ color: "#7064ef" }} />Estatery</div>
      <div className="navbar_list-items-wrap">
        <ul className="navbar_list-items">
          <li className="active">Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="navbar_buttons-wrap">
        <button className="btn login">Login</button>
        <button className="btn sign-up">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar