import React from 'react'

function BottomNavigation() {
  return (
    <div className="nav-bottom">
      <div className='nav-container'>
        <div className='nav-item'>
          <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1688623864/icons8-home-64_jbduxu.png" alt="dash_icon" />
        </div>
        <div className='nav-item'>
          <img style={{height:"64px",width:"64px"}} src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1688635163/icons8-steering-wheel-100_fkyxaf.png" alt="drive_mode" />
        </div>
        <div className='nav-item'>
          <img style={{height:"64px",width:"64px"}} src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1688636064/icons8-find-hospital-96_mtwbvu.png" alt="map" />
        </div>
      </div>
    </div>
  )
}

export default BottomNavigation