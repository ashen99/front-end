import img1 from '../../assets/game-console.png'
import img2 from '../../assets/tech.png'
import img3 from '../../assets/BERT-logo-new.png'
import img4 from '../../assets/Colab-new.png'
import img5 from '../../assets/javascript-logo-new.png'
import img6 from '../../assets/keras-logo-new.png'
import img7 from '../../assets/flask-logo-new.png'
import './about.css'

const About = () => {
  return (
    <div className='maindiv' id="about">
      <div className='maindiv-1'>
      {/* ================= horizontal line ================== */}
      <div style={{ borderTop: "2px solid #fff ",marginLeft: 300, marginRight: 300}}></div>
      {/* ================= about =================== */}
      <div className="about" id="about">
            <div className="desctiption">
              <div className="logo">
              <img src={img1} className='img1' alt='logo' style={{height: "50px", width: "50px"}}/>
                  <span style={{ paddingLeft:10}}>SENVOIX</span>
                </div>
                <div class="desc">
                      <p style={{color: "rgb(89, 89, 91);"}}> Using Sen-Voix you can get the polarity of your game reviews and predict the satisfaction level of players. <br></br><span>This application was done by using Google </span><span style={{color:"#4285f4"}}>B</span><span style={{color:"#db4437"}}>E</span><span style={{color:"#f4b400"}}>R</span><span style={{color:"#0f9d58"}}>T</span>.
                      </p>
                    </div>
              </div>
              <div class="image-section">
                <img src={img2} className='analysis' alt='analysis'/>
                </div>
            </div>
      </div>
      {/* ================= about bert ================== */}
      <div className='maindiv-2'>
        < div class="about-bert">
          <div class="bert-img"></div>
            <div class="bert-text">
              <p style={{marginBottom: "35px",fontSize: "35px", marginTop: "30px"}}>What is <span style={{color:"#4285f4"}}>B</span><span style={{color:"#db4437"}}>E</span><span style={{color:"#f4b400"}}>R</span><span style={{color:"#0f9d58"}}>T</span> ? </p>
              <p style={{marginTop: "20px"}}>BERT (Bidirectional Encoder Representations from Transformers) is a deep learning algorithm related to natural language processing.
              It helps a machine understand what words in a sentence mean, but with all the nuances of context.<br></br><a href="https://jalammar.github.io/illustrated-bert/" rel="noreferrer" target="_blank" style={{color:"#3884f0;"}}>     Read More </a></p>
            </div>
        </div>
      </div>
      {/* ================= project tech ================== */}
      <div className='details-project'>
        <div className='text-cont'>
          This Project was created using
        </div>
        <div className='image-cont'>
          <img src={img3} alt="" width="90px" height="90px"  />
          <img src={img4}  alt="" width="90px" height="90px" />
          <img src={img5}  alt="" width="99px" height="99px" />
          <img src={img6}  alt="" width="80px" height="80px" />
          <img src={img7}  alt="" width="100px" height="100px" style={{filter: "invert(100%)"}}/>
          {/* <img src={}  alt="" width="90px" height="90px" style={{filter: "grayscale(100%)"}} /> */}
        </div>
      </div>
    </div>
    
  );
};

export default About;
