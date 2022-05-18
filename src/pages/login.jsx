import Content from "../components/content";
import Logins from "../components/logins";
import All from "../Assets/All.module.css";

function Login(){
    return(
        <div className={All.body}>
                <div className="page" style={{display : 'flex'}}>
                    <div className="content" style={{flex : '50%', display : 'flex', marginLeft : '50px', alignItems : 'center', marginTop : '100px'}}>
                        <Content />
                    </div>

                    <div className="login" style={{flex : '50%', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                        <Logins />
                    </div>
                </div>  
        </div>
    );
}


export default Login;