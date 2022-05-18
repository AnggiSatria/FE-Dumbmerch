import React from 'react';
import All from "../Assets/All.module.css";
import Navbar from '../components/NavbarAdmin';
import TableListProduct from "../components/tablelistproduct";

const Product = () => {
  return (
    <div className={All.body}>
      <div className="Navbar">
          <Navbar/>
      </div>

      <div className="table" style={{marginTop : '100px'}}>
        <TableListProduct/>
      </div>
    </div>
  )
}

export default Product;