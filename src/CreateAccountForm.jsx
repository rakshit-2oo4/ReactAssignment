import './CreateAccountForm.css';
import { Navigate, useNavigate } from "react-router-dom";


function CreateAccountForm() {
  const navigate = useNavigate();
  return (
    <div className="create-account-container">
      <h2 className="create-account-title">Create your PopX account</h2>

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" value="Marry Doe" required/>
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone number</label>
        <input type="text" id="phoneNumber" value="Marry Doe" required/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" value="Marry Doe" required/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" value="Marry Doe" required/>
      </div>

      <div className="form-group">
        <label htmlFor="companyName">Company name</label>
        <input type="text" id="companyName" value="Marry Doe" required/>
      </div>

      <div className="form-group">
        <label style={{color: "#000"}} > Are you an Agency?</label>
        <div className="radio-group" required>
          <label>
            <input style={{height: "20px", width: "20px", paddingLeft: "15px"}}
             type="radio" name="agency" value="yes" defaultChecked />&nbsp;&nbsp; Yes
          </label>
          <label>
            <input style={{height: "20px", width: "20px", paddingLeft: "15px"}}
            type="radio" name="agency" value="no" /> &nbsp;&nbsp;No
          </label>
        </div>
      </div>

      <button className="create-account-button" 
        onClick={() => navigate("/account-settings")}
      >Create Account</button>
    </div>
  );
}

export default CreateAccountForm;