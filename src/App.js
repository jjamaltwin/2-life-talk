import "./App.css";
import { Image } from "react-bootstrap";
import ImageSlider from "./ImageSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { MDBContainer } from 'mdb-react-ui-kit';



function App() {
  return (        
    <MDBContainer fluid id="fluid" >
      <div className="App">
        <h1>2 Life Talk</h1>
        <div className="media">
        <div className="top-wrapper">
          <Image className="profile" src="JocM.jpg" widh="4rem"></Image>
          <p>
            "LifeTalk,...Let's Talk...get an understanding or a reason to laugh or
            cry, we are in this together!"
            <h2>Life coach and counselling, Jocelyn Miles-Mathis </h2>
          </p>
          
        </div>
        <div className="services">
          <h3>Services Provided </h3>
          <p>Peer to Peer conflict resolution</p>
          <p>Recovery Specialist</p>
          <p>Peer To Family conflict resolution</p>
          <p>Greiving Peer Support </p>
          <p>Trauma PTSD Peer Support </p>
          <p>Art Therapy</p>
        
        </div>

        </div>
        <div className="main">
          <p> "I was traumatized, but now I see; so let me be. Let's talk the pain out"(Jocelyn Mathis-Miles)</p>
          <ImageSlider/>
        </div>
          <div className="foot-wrap">
  
        <div className="footer">
          <h2>Contact Me</h2>
          <p>Phone: 850-303-8265 </p>
          <p>Email: 2lifetalk@gmail.com </p>
        </div>
        <div className="social">
        <a
          name="Click Me"
          color="black"
          class="text-center1"
            href="https://www.facebook.com/youb.positive"
            className="contact"
            >
            <FontAwesomeIcon
              className="fb"
              size="5x"
              opacity="1"
              color="blue"
              icon={faFacebook}
              />
          </a>
          <a
          class="text-center1"
          href="https://www.marykay.com/JMathis735"
          className="contact">
  
          <Image className="qrcode" src="qr-code.png" widh="4rem"></Image>
          </a>
        
        </div>
              </div>
      </div>
    </MDBContainer>
    );
  }


export default App;
