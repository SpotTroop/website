import React from "react";
import Header from "../component/Header";


const Home = () => {
  return (
    <>
     <Header/>
      <div className="HomeMainImage">
        <h1>SpootTroop</h1>
        <div
          style={{
            paddingBottom: "300px",
            position: "absolute",
            top: "68%",
            left: "50%",
            transform: "translate(-27%, -42%)",
          }}
        >
          <span className="Y1">Y</span>
          <span className="O1">o</span>
          <span className="e2">u</span>
          <span className="k1">r</span>
          <span className="sear">sear</span>
          <span className="ch">ch</span>
          <span className="for">for</span>
          <span className="par">par</span>
          <span className="king">king</span>
          <span className="spa">spa</span>
          <span className="ce">ce</span>
          <span className="en">en</span>
          <span className="ds">ds</span>
          <span className="he">he</span>
          <span className="re">re</span>
        </div>

        <div className="container">
          <button className="button">Try for free</button>
          <button className="button">pricing plane</button>
        </div>
        <img
          src="../src/assets/Parking.webp"
          alt="background image"
          style={{ objectFit: "cover", width: "100vw", height: "100vh" }}
        />
        <img
          src="../src/assets/Logo.webp"
          alt="Logo"
          width={91.01}
          height={91.01}
          className="Logo"
        />
        {/* <img src="../src/assets/HomePageContent.webp" alt="" width={582} height={292} classNameName="content" /> */}
        <img
          src="../src/assets/SensorImage.webp"
          alt="Sensor"
          width={93.49}
          height={30.39}
          className="sensor"
        />
      </div>

      <div className="SpotFinder">
        <div className="left">
          <div className="para">
            <h1>SpotFinder App</h1>
            <p>
              With our SpotFinder mobile App, the search for parking ​space has
              never been easier.
            </p>
            <p>
              Just download the app and start driving to your next ​parking
              spot.
            </p>
            <div className="DownloadButton">
              <button className="button">Download</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="mobile">
            <div className="phone">
              <div className="phone-mirror">
                <div className="topWrapper">
                  <div className="camera"></div>
                  <div className="line-rec"></div>
                </div>
                <img
                  src="../src/assets/Map.png"
                  alt="Map picture"
                  height="535"
                  width="312"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SpotSense">
        <div className="left">
          <div className="para">
            <h1>SpotSense</h1>
            <p>
              Using advanced sensors and algorithms, SpotSense can ​detect the
              presence of cars in real-time and provide accurate information
              about the availability of parking spaces.
            </p>
            <p>
              If you are a parking lot owner, we have a plan for you to use
              ​these smart parking sensors on your parking lot. Get in in ​touch
              with us using the button below.
            </p>
            <div className="DownloadButton">
              <button className="button">Order now</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="../src/assets/Parking.webp"
            alt="Map picture"
            style={{ objectFit: "cover", width: "534px", height: "621px" }}
            className="content"
          />
          <img src="../src/assets/SensorImage.webp" alt="Sensor"  width={93.49}  height={30.39}
            className="sensor1"/>
        </div>
      </div>

      <div className="SpotSense">
        <div className="left">
          <div className="para">
            <h1>OverWatch ​Analytics</h1>
            <p>
              With OverWatch Data Analytics platform, you can ​have an overview
              of how your parking spaces are ​being used.
            </p>
            <p>
              We also plan to use the power of AI to provide ​suggestions and
              warnings for traffic management ​purposes.
            </p>
            <div className="DownloadButton">
              <button className="button">Get in Touch</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="../src/assets/SearchingImage.webp" alt="​Analytics picture"
            style={{ width: "688px", height: "359px" }} className="content"
          />
        </div>
      </div>
      <p className="headerr">The team behind the parking revolution</p>
      <div className="team">
        
        <div className="member">
          <img src="../src/assets/erik.png" alt="erik" width={166} height={175}  />
          <p>Eric Astor </p>
          <p>CFO</p>
        </div>
        <div className="member">
          <img src="../src/assets/florian.png" alt="florian" width={166} height={175}  />
          <p>Florian Manthey </p>
          <p>CEO</p>
        </div>
        <div className="member">
          <img src="../src/assets/waqar.png"  alt="waqar" width={166} height={175}/>
          <p>Waqar Rashid </p>
          <p>CTO</p>
        </div>
      </div>
      <p className="headerr">Pricing Plans</p>
      <div className="team">
        
        <div className="member">
          <img src="../src/assets/Pa​rkingLotOwners.jpg" alt="Pa​rking Lot Owners" width={303} height={192}  />
          <p>Pa​rking lot owners/operators</p>
          <p>Price: 5€/month/sensor</p>
          
        </div>
        <div className="member">
          <img src="../src/assets/govt.jpg" alt="government " width={303} height={192}  />
          <p>Government </p>
          <p>On-Demand reports, access to live data ​</p>
          <p>feeds, analytics software, shared ​</p>
          <p>earning ​model</p>
        </div>
        <div className="member">
          <img src="../src/assets/driver.jpg"  alt="driver image" width={303} height={192}/>
          <p>For Driver </p>
          <p>5€/month</p>
        </div>
      </div>
      <div className="groupBttons">
        <button className="button">Sign Up</button>
        <button className="button">Request quotation</button>
        <button className="button">Get in touch</button>
      </div>
      <div className="footer">
        <div className="left">
          <img src="../src/assets/footerParking.jpg" alt="" 
          />
        </div>
        <div className="right">
        <img
          src="../src/assets/Logo.webp"
          alt="Logo"
          width={152.01}
          height={152.01}
          
        />
        <p style={{fontSize:'35px'}}>Driving in circles, no more.</p>
        
        <div className="address">
          <p> Kuhnkestraße 6, 24118 Kiel,< br/>Germany</p>
           

          <p>info@spottroop.com</p> 
         </div>
          <div className="img">
          <img src="../src/assets/inIcon.svg" alt="linkedIn icon" width={24} height={24}  />
          <img src="../src/assets/twitterIcon.svg" alt="Twitter Icon" width={24} height={24} />
          <img src="../src/assets/facebookIcon.svg" alt="Face Book Icon" width={24} height={24}/>
        </div>
        </div>
        </div>

    </>
  );
};

export default Home;
