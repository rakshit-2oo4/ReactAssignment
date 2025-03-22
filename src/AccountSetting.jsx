import './AccountSetting.css';
import profileImage from '../src/assets/profile-image.png';

function AccountSettings() {
  return (
    <div className="account-settings-container">
      <h4 className="account-settings-title">Account Settings</h4>

      <div className="profile-card">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="camera-icon">📷</div>
        </div>
        <div className="profile-details">
          <h3 className="profile-name">Marry Doe</h3>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
         Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
        <hr/>
        <hr style={{marginTop: "90%", textDecorationLine: "dotted", color: "#f0f0f0"}}/>
    </div>
  );
}

export default AccountSettings;