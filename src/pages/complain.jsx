import React from 'react'
import Navbar from '../components/navbar';
import Contact from '../components/contact';
import Left from '../components/left';
import Right from '../components/right';

const Complain = () => {
  return (
    <div style={{backgroundColor : 'black'}}>
        <div className="Navbar" style={{height : '15vh'}}>
            <Navbar />
        </div>

        <div className="Page" style={{height : '85vh', display : 'flex', marginTop : '50px'}}>
            <div className="left" style={{flex : '25%', display : 'flex'}}>
                <Left />
            </div>
            
            <div className="Zero" style={{height : '100%', border : '1px solid white', marginLeft : '10px', marginRight : '10px'}}></div>

            <div className="right" style={{flex : '75%', display : 'flex', flexDirection : 'column'}}>
                <div className="up" style={{display : 'flex', alignItems : 'flex-start', flex : '90%'}}>
                    <Right />
                </div>

                <div className="down" style={{flex : '10%', width : '100%', alignItems : 'flex-end'}}>
                    <Contact />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Complain;