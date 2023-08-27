import React,{useState} from 'react'; // Import useState
import "./Home.scss";
import logo from "../../logo.png";
import Userdata from "./user_data"
const Home = () => {
  
    // const [modalOpen, setModalOpen] = useState(false);
    const [showUserdata, setShowUserdata] = useState(false);
    const handleOpenModal1 = () => {
      window.open('http://localhost:7000', '_blank');
    };
    const handleOpenModal2 = () => {
      window.open('http://localhost:8000', '_black');
    };
    const handleUserdataClick = () => {
      setShowUserdata(true);
    };
    const prob = () => {
      return <Userdata />;
    };
  

    

  return (
    <div>
      <div className='row'>
        <div className='column1'>
          <button onClick={handleUserdataClick}>Enter Your Problem</button>
          {showUserdata && prob()}
        </div>
        <div className='column3'>For Nurse's<button className='btn3' onClick={handleOpenModal2}>LOGIN</button>
        </div>
        <div className='column2'>For Doctor's<button className='btn2' onClick={handleOpenModal1}>LOGIN</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="logo.png" />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-disclaimer">
          &copy; 2023 Healthcare Website. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
