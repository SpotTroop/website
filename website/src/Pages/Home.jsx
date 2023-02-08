import React from "react";

const Home = () => {
  return (
    <>
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
          <span class="Y1">Y</span>
          <span class="O1">o</span>
          <span class="e2">u</span>
          <span class="k1">r</span>
          <span className="sear">sear</span>
          <span className="ch">ch</span>
          <span class="for">for</span>
          <span class="par">par</span>
          <span class="king">king</span>
          <span class="spa">spa</span>
          <span class="ce">ce</span>
          <span className="en">en</span>
          <span className="ds">ds</span>
          <span className="he">he</span>
          <span className="re">re</span>
        </div>

        <div class="container">
          <button class="button">Try for free</button>
          <button class="button">pricing plane</button>
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
        {/* <img src="../src/assets/HomePageContent.webp" alt="" width={582} height={292} className="content" /> */}
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
            <div class="DownloadButton">
              <button class="button">Download</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div class="mobile">
            <div class="phone">
              <div class="phone-mirror">
                <div class="topWrapper">
                  <div class="camera"></div>
                  <div class="line-rec"></div>
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
            <div class="DownloadButton">
              <button class="button">Order now</button>
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
          <img
            src="../src/assets/SensorImage.webp"
            alt="Sensor"
            width={93.49}
            height={30.39}
            className="sensor1"
          />
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
            <div class="DownloadButton">
              <button class="button">Get in Touch</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="../src/assets/SearchingImage.webp"
            alt="​Analytics picture"
            style={{  width: "688px", height: "359px" }}
            className="content"
          />
        
        </div>
      </div>
    </>
  );
};

export default Home;
