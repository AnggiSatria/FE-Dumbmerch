import React from 'react'
import Navbar from '../components/navbar';
import MyProfile from '../components/my profile';
import Transaction from '../components/transaction';
import All from "../Assets/All.module.css";

const Profile = () => {
  return (
    <div className={All.body}>
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="Page" style={{display : 'flex', marginTop : '50px'}}>
        <div className="left" style={{display : 'flex', flex : '50%', marginLeft : '30px'}}>
          <MyProfile />
        </div>

        <div className="right" style={{display : 'flex', flex : '50%', width : '100%', marginRight : '30px'}}>
          <Transaction />
        </div>
      </div>
    </div>
  )
}

export default Profile;