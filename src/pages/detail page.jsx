import React from 'react'
import Navbar from '../components/navbar';
import All from '../Assets/All.module.css';
import Mouse from "../Assets/mouses.jpg"

const DetailPage = () => {
  return (
    <div className={All.body1}>
        <div className="Navbar" style={{height : '15vh'}}>
            <Navbar />
        </div>

        <div className="content" style={{height : '85vh', display : 'flex', alignItems : 'center', marginTop : '50px'}}>
          <div className="left" style={{flex : '50%', display : 'flex', justifyContent : 'flex-end', marginRight : '20px'}}>
            <img src={Mouse} alt="" style={{width : '400px', height : '500px'}}/>
          </div>

          <div className="right" style={{flex : '50%', display : 'flex', justifyContent : 'flex-start', marginLeft : '20px', flexDirection : 'column', marginLeft : '10px', marginRight : '30px'}}>
              <div className="tittle" style={{color : 'white'}}>
                <h1>Mouse</h1>
                <p>Stock : 600</p>
              </div>

              <div className="qualification" style={{color : 'white'}}>
                <p>-Wireless Mouse</p>
                <p>-Konektivitas Wireless 2.4 Ghz</p>
                <p>-Jarak Wireless hingga 10m</p>
                <p>-plug and play</p>
                <p>-Baterai tahan hingga 12 bulan</p>
              </div>

              <div className="desc" style={{color : 'white'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur fuga cumque sit animi aut neque itaque, eveniet recusandae iste soluta eum perspiciatis aperiam numquam voluptas enim illo quo exercitationem.</p>
              </div>

              <div className="price" style={{color : 'red', display : 'flex', justifyContent : 'flex-end'}}>
                <h2>Rp.300.000,-</h2>
              </div>

              <button style={{width : '100%', height : '40px', backgroundColor : 'red', color : 'white'}}>Buy</button>
          </div>
        </div>
    </div>
  )
}

export default DetailPage;