import "./PopXWelcome.css";
import { useNavigate } from "react-router-dom";

function PopXWelcome() {
const navigate = useNavigate();
    return (
      <div className="mainPage">
        
        <div style={{ textAlign: 'center' }}>
          <h1 className="heading">Welcome to PopX</h1>

          <p className="para">
            Lorem ipsum dolor sit amet,
            <br/> consectetur adipiscing elit.
          </p>
  
          <button  
            onClick={() => navigate("/create-account")}
            className="btn"
           style={{backgroundColor: "#6C25FF", color: "#fff"}}>
           <b>Create Account</b>
          </button>
          <br/>
          <button
           onClick={() => navigate("/login")}
           className="btn"
            style={{ backgroundColor: '#6C25FF4B', color: '#333'}}>
                 <b>Already Registered? Login</b>
          </button>
        </div>
      </div>
    );
  }
  
  export default PopXWelcome;