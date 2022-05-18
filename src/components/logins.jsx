import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Logins(){

    const navigate = useNavigate();

    const route = () => {
        navigate("/profile")
    }

    return (
        <div>
            <div className="All" style={{display : 'flex', flexDirection : 'column', width : '350px', backgroundColor : 'grey', borderRadius : '10px'}}>
                <div className="Login" style={{marginTop : '30px', marginLeft : '30px'}}>
                    <h1 style={{fontSize : '30px', color : 'white'}}>Login</h1>
                </div>

                <div className="page" style={{marginLeft : '30px'}}>
                    <div className="Email">
                        <input type="text" placeholder="Email" style={{width: '90%', height : '40px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="password" style={{marginTop : '15px'}}>
                        <input type="text" placeholder="Password" style={{width : '90%', height : '40px', borderRadius : '5px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="button" style={{marginTop : '15px', marginBottom : '30px'}}>
                        <Button variant="danger" onClick={route} style={{height : '40px', width : '90%', textDecoration : 'none', color : 'white', textAlign : 'center', borderRadius : '5px'}}>Login</Button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Logins;