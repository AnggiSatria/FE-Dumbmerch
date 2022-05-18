import Registers from "../components/registers";
import Content from "../components/content";
import All from "../Assets/All.module.css";


function Register(){
    return (
        <div className={All.body}>
           <div className="page" style={{display : 'flex'}}>
                <div className="content" style={{flex : '50%', display : 'flex', marginLeft : '50px', alignItems : 'center', marginTop : '100px'}}>
                    <Content />
                </div>

                <div className="login" style={{flex : '50%', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                    <Registers />
                </div>
            </div>  
        </div>
    )
}

export default Register;