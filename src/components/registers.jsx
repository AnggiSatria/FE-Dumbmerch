import { Link } from "react-router-dom";

function Registers(){
    return (
        <div>
            <div className="All" style={{display : 'flex', flexDirection : 'column', width : '350px', backgroundColor : 'grey', borderRadius : '10px'}}>
                <div className="Login" style={{marginTop : '30px', marginLeft : '30px'}}>
                    <h1 style={{fontSize : '30px', color : "white"}}>Register</h1>
                </div>

                <div className="page" style={{marginLeft : '30px'}}>
                
                    <div className="Name">
                        <input type="text" placeholder="Name" style={{width: '90%', height : '30px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="Email" style={{marginTop : '15px'}}>
                        <input type="text" placeholder="Email" style={{width: '90%', height : '30px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="password" style={{marginTop : '15px'}}>
                        <input type="text" placeholder="Password" style={{width : '90%', height : '30px', borderRadius : '5px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="button" style={{width : '90%', height : '30px', backgroundColor : 'red', marginTop : '15px', marginBottom : '30px', textAlign : 'center', borderRadius : '5px'}}>
                        <Link to ="/" style={{textDecoration : 'none', color : 'white', textAlign : 'center'}}>Register</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Registers;