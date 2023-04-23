//import code from "../img/pro.png";
//import binaryWorld from "../img/binary.png";
import gameicons from '../../assets/gameicons.png'
import "./home.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const styles = {
  fontSize: "18px"
};

const Home = () => {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/games');
  }

  return (
    <div className='main-div'>
      <div className="Home" id="home">
        <div className="div1">
          <h1 className="tittle">SEN-VOIX</h1>
          <p><span style={styles}> A Tool for Sentiment Analysis of Game Reviews.</span></p> 
          <img src={gameicons} className='gameicons' alt='icons'/>
          </div> 
      </div>
      <div className='div2'>
          <Button variant="primary" onClick={handleClick} style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>Jump In!</Button>
      </div>
    </div>
    
  );
};

export default Home;
