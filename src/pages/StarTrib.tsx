import React from "react";
import { exampleArticle } from "./exampleArticle";

//source URL: https://www.startribune.com/some-people-wont-be-charged-in-feeding-our-future-uncharged/601368099


const article = exampleArticle;

const StarTrib: React.FC = () => {
  const isLoggedIn: boolean = false;
  const getPreview = (text:string):string => {
		const words = text.split(' ');
		return words.slice(0,36).join(' '); // 36 words is the firs paragraph in this particular article, clearly you have logic to do much of this already.
	}

  return (
		<>
			{/* insert title */}
    <div>
		{isLoggedIn ? (
			<p className="articleBody">{article.body}</p>
		) : (
			<>
          <p>{getPreview(article.body)}</p>
          <div className="overlay"></div>
        </>
      )}
			</div>

			{/* insert paywall pop up */}
		</>
  );
};

export default StarTrib;
