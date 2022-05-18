import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin';
import All from '../Assets/All.module.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditCategory = () => {

    const Navigate = useNavigate();
    const handleNavigate = () => {
        Navigate("/category");
    }

  return (
    <div className={All.body} style={{height : '100%'}}>
        <nav style={{height : '7vh'}}>
            <NavbarAdmin/>
        </nav>
        

        <div className="All" style={{height : '93vh', marginTop : '100px'}}>
            <div className="teks">
                <h4 style={{color : 'white', marginLeft : '30px'}}>Edit Category</h4>
            </div>

            <form action="" style={{marginTop : '30px', display : 'flex', flexDirection: 'column'}}>
                <div className="input" style={{marginLeft : '2%', marginRight : '2%', width : '100%'}}>
                    <input type="text" placeholder='Insert Category' style={{width : '96%', height : '40px'}}/>
                </div>

                <div className="button" style={{marginTop : '30px', width : "100%", marginLeft : '2%', marginRight : '2%'}}>
                    <Button onClick={handleNavigate} type='submit' variant="success" style={{width : '96%'}}>Save</Button>{' '}
                </div>
            </form>
        </div>

    </div>
  )
}

export default EditCategory;