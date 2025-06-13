import React, { CSSProperties, useState } from "react";
import { exampleArticle as article } from "./api/exampleArticle";
//imported the styles on _app.tsx

//source URL: https://www.startribune.com/trump-and-cabinet-officials-cite-minneapolis-riots-walzs-response-to-justify-troops-in-los-angeles/601371144

const loggedOut: CSSProperties = { backgroundColor: "red" };

const StarTrib: React.FC = () => {
  const [isLoggedIn, setIsLogedIn] = useState<boolean>(false);
  const handleLoginToggle = (): void => setIsLogedIn(!isLoggedIn);
  return (
    <>
      <div className="nav1 nav">
        * The Minnesota Star Tribune
        {/* Imagine if I replicated the entire website */}
      </div>
      <div className="nav2">
        <p>Minnesota News You Can Use</p>
        <p style={isLoggedIn ? {} : loggedOut} onClick={handleLoginToggle}>
          {isLoggedIn ? "Toggle: isLoggedIn" : "Toggle: !isLoggedIn"}
        </p>
      </div>
      <div className="politics">POLITICS</div>
      <div className="title">{article.title}</div>
      <p className="editorial-body">{article.subtitle}</p>
      <div className="bold">By Ryan Faircloth</div>
      <div className="smallText">The Minnesota Star Tribune</div>
      <div className="smallText2">June 11, 2025 at 5:18PM</div>
      <img
				alt="Picture of Walz speaking at a podium"
        src={
          "https://arc.stimg.co/startribunemedia/L5D6BUVRXZBERHB5I2T6S25UJI.jpg?&w=390"
        }
      ></img>

      {isLoggedIn ? (
        <p className="editorial-body">{article.body}</p>
      ) : (
        <>
          <p className="editorial-body rejected">
            Now using 'inspect' and deleting the div of the pop up only reveals
            this text.😉
            <br />
            <br />~ ~ ~ Sorry, try logging in to view full article. ~ ~ ~
          </p>
          <div className="signUpWrapper">
            <div id="starTribBottom" className="white nav">
              * The Minnesota Star Tribune
            </div>
            <div className="signUp white nav">
              SIGN UP TO READ <br /> THIS STORY
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StarTrib;
