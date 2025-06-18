import React from 'react';
import './dashboard.css';
import balance_icon from '../Assets/balance.png';
import coin_icon from '../Assets/coin.png';
import wifi_icon from '../Assets/wifi.png';
import card_icon from '../Assets/card.png';
import bulb_icon from '../Assets/bulb.png';
import tv_icon from '../Assets/tv.png';



const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">Welcome</header>

      <div className="card-section">
        <div className="card wallet-balance"><img src={balance_icon} alt="" /><div>wallet balance<br />*****</div></div>
        <div className="card referral-bonus"><img src={coin_icon} alt="" /><div>Referral bonus<br />*****</div></div>
      </div>

      <div className="bank-section">
        <div className="bank-card">
          <div>MONIEPOINT<br />*****<br /><strong>Blue House</strong></div>
        </div>
        <div className="bank-card">
          <div>WEMA BANK<br />*****<br /><strong>Blue Tech</strong></div>
        </div>
      </div>

      <div className="services">
        <div className="service-card">
          <img src={wifi_icon} alt="Buy Data" />
          <div>Buy Data</div>
        </div>
        <div className="service-card">
          <img src={card_icon} alt="Fund Wallet" />
          <div>Fund wallet</div>
        </div>
        <div className="service-card">
          <img src={bulb_icon} alt="Electricity Bills" />
          <div>Electricity Bills</div>
        </div>
        <div className="service-card">
          <img src={tv_icon} alt="Cable Subscription" />
          <div>Cable subscription</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
