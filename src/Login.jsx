import './Login.css';
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  return (
    <div className="login-container">
      <h2 className="login-title">Signin to your <br/> PopX account</h2>
      <p className="login-description">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter email address" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" />
      </div>

      <button onClick={() => navigate("/account-settings")}
       className="login-button"><b>Login</b></button>
    </div>
  );
}

export default Login;