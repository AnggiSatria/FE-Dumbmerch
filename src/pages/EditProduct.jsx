import React from 'react'
import Navbar from '../components/NavbarAdmin';
import { Button } from 'react-bootstrap';
import All from '../Assets/All.module.css';
import { useNavigate } from 'react-router-dom';


const EditProduct = () => {
    const Navigate = useNavigate;
    const handleNavigate = () => {
        Navigate("/product")
    }

  return (
    <div className={All.body1}>
        <nav style={{height: '7vh'}}>
            <Navbar/>
        </nav>

        <div className="All" style={{height : '93vh', marginTop : '100px'}}>
            <div className="teks" style={{marginLeft : '30px'}}>
                <h4 style={{color: 'white'}}>Edit Category</h4>
            </div>

            <div className="body" style={{marginTop : '30px'}}>
                <form action="">
                    <div className="file" style={{width : '100%'}}>
                        <input type="file" className={All.file} style={{color : 'white', width : "96%", marginLeft : '1%', marginRight : '1%'}}/>
                    </div>

                    <div className="name" style={{width : '100%', marginTop : '20px'}}>
                        <input type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}}/>
                    </div>

                    <div className="desc" style={{width : '100%', marginTop : '10px'}}>
                        <textarea name="" id="" cols="30" rows="10" style={{width : '96%', marginLeft : '1%', marginRight : "1%", height : '40%', borderRadius : '5px', resize : 'none'}}></textarea>
                    </div>

                    <div className="price" style={{width : '100%', marginTop : '10px'}}>
                        <input type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}}/>
                    </div>

                    <div className="stock" style={{width : '100%', marginTop : '10px'}}>
                        <input type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}}/>
                    </div>

                    <div className="button" style={{marginTop : '30px', width : "100%", marginLeft : '1%', marginRight : '1%'}}>
                        <Button onClick={handleNavigate} variant="success" style={{width : '96%'}}>Save</Button>{' '}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditProduct;