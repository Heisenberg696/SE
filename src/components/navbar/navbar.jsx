import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('')
  // useEffect(() => {
  //   setActiveTab(location.pathname.split('/'))  
  // }, [activeTab])
  
  
  return (
    <div className='navbar'>
      <div className="left">
        <Link to ="/" style={{textDecoration:"none"}}>
          <span>Pen&Parse</span>
        </Link>
      </div>
      <div className="right">
      <h2>{activeTab}</h2>
      </div>
    
    </div>
  )
}

export default Navbar;