import Navbar from "../components/navbar";
import Cards from "../components/card";
import All from "../Assets/All.module.css";

function Homepage(){
    document.body.style.backgroundColor="black"
    return (
        <div>
            <div className="Navbar" style={{height : '15vh'}}>
                <Navbar />
            </div>

            <div className="Cards" style={{marginTop : '50px', height : '85vh'}}>
                <Cards />
            </div>
        </div>
    );
}

export default Homepage;