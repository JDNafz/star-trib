import React, { useState } from "react";
import { exampleArticle, snippet } from "./api/exampleArticle";
//imported the styles on _app.tsx

//source URL: https://www.startribune.com/trump-and-cabinet-officials-cite-minneapolis-riots-walzs-response-to-justify-troops-in-los-angeles/601371144

const article = exampleArticle;
const loggedOut = { backgroundColor: "red" };

const StarTrib: React.FC = () => {
  const [isLoggedIn, setIsLogedIn] = useState<Boolean>(false);

  return (
    <>
      <div className="nav1">
        * The Minnesota Star Tribune
        {/* Imagine if I replicated the entire website */}
      </div>
      <div className="nav2">
        <p>Minnesota News You Can Use</p>
        <p
          style={isLoggedIn ? {} : loggedOut}
          onClick={() => setIsLogedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Toggle: isLoggedIn" : "Toggle: !isLoggedIn"}
        </p>
      </div>
      <div className="politics">POLITICS</div>
      <div className="title">{article.title}</div>
      <p className="editorial-body">{snippet}</p>
      <div className="bold">By Ryan Faircloth</div>
      <div className="smallText">The Minnesota Star Tribune</div>
      <div className="smallText2">June 11, 2025 at 5:18PM</div>
      <img
        src={
          "https://arc.stimg.co/startribunemedia/L5D6BUVRXZBERHB5I2T6S25UJI.jpg?&w=390"
        }
      ></img>

      {isLoggedIn ? (
        <p className="editorial-body">{article.body}</p>
      ) : (
        <>
          <p className="editorial-body fake-text">
            Sorry, try logging in to view full article.
          </p>
        </>
      )}
			
      {/* insert paywall pop up */}
    </>
  );
};

export default StarTrib;
