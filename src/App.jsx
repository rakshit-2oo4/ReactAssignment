import PopXWelcome from "./PopXWelcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";
import Login from "./Login";
import AccountSettings from "./AccountSetting";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopXWelcome />}/>
        <Route path="/create-account" element={<CreateAccountForm/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route path="/account-settings" element={<AccountSettings/>}/>
      </Routes>
    </Router>
  );
}
export default App;