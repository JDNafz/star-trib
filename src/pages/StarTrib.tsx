import React from "react";
import { exampleArticle, snippet } from "./api/exampleArticle";
//imported the styles on _app.tsx

//source URL: https://www.startribune.com/trump-and-cabinet-officials-cite-minneapolis-riots-walzs-response-to-justify-troops-in-los-angeles/601371144

const article = exampleArticle;

const StarTrib: React.FC = () => {
  const isLoggedIn: boolean = false;
  const getPreview = (text: string): string => {
    // const words = text.split(" ");
    // return words.slice(0, 50).join(" ");
    return snippet; // simplified as the article doesn't display the first paragraph, rather the 3rd. I'm sure you have features to choose what to display.
  };

  return (
    <>
      <div className="nav1">
        * The Minnesota Star Tribune
        {/* Imagine if I replicated the entire website */}
      </div>
      <div className="nav2">
        <p>Minnesota News You Can Use</p>
				<p>Subscribe</p>
      </div>
      <div className="politics">POLITICS</div>
      <div className="title">{article.title}</div>
      <div>
        {isLoggedIn ? (
          <p className="editorial-body">{article.body}</p>
        ) : (
          <>
            <p className="editorial-body">{getPreview(article.body)}</p>
            <div className="overlay"></div>
          </>
        )}
      </div>

      {/* insert paywall pop up */}
    </>
  );
};

export default StarTrib;
