import Navbar from "../components/NavbarAdmin";
import All from "../Assets/All.module.css"
import TableListCategory from "../components/tablelistcategory";

import React from 'react'

const Category = () => {
  return (
    <div className={All.body1}>
        <div className="Navbar" style={{height : '15vh'}}>
            <Navbar/>
        </div>

        <div className="table" style={{height : '85vh'}}>
            <TableListCategory/>
        </div>
    </div>
  )
}

export default Category