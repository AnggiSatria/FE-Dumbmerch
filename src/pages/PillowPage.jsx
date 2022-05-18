import React from 'react'
import Navbar from '../components/navbar';
import All from '../Assets/All.module.css';
import Pillow from "../Assets/Pillow.jpg"

const PillowPage = () => {
  return (
    <div className={All.body1}>
        <div className="Navbar" style={{height : '15vh'}}>
            <Navbar />
        </div>

        <div className="content" style={{height : '85vh', display : 'flex', alignItems : 'center', marginTop : '50px'}}>
          <div className="left" style={{flex : '50%', display : 'flex', justifyContent : 'flex-end', marginRight : '20px'}}>
            <img src={Pillow} alt="" style={{width : '400px', height : '500px'}}/>
          </div>

          <div className="right" style={{flex : '50%', display : 'flex', justifyContent : 'flex-start', marginLeft : '20px', flexDirection : 'column', marginLeft : '10px', marginRight : '30px'}}>
              <div className="tittle" style={{color : 'white'}}>
                <h1>Pillow</h1>
                <p>Stock : 600</p>
              </div>

              <div className="qualification" style={{color : 'white'}}>
                <p>-Bantal Dengan Design Yang Menarik</p>
                <p>-Tersedia Dengan Bermacam Ukuran Dan Variasi</p>
                <p>-Dapat Di Custom Sesuai Keinginan</p>
              </div>

              <div className="desc" style={{color : 'white'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur fuga cumque sit animi aut neque itaque, eveniet recusandae iste soluta eum perspiciatis aperiam numquam voluptas enim illo quo exercitationem.</p>
              </div>

              <div className="price" style={{color : 'red', display : 'flex', justifyContent : 'flex-end'}}>
                <h2>Rp.100.000,-</h2>
              </div>

              <button style={{width : '100%', height : '40px', backgroundColor : 'red', color : 'white'}}>Buy</button>
          </div>
        </div>
    </div>
  )
}

export default PillowPage; 