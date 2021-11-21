import React, { useState, useEffect } from "react";
import SkeletonArticle from "../Skeleton/SkeletonArticle";

export default function Articles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    },5000);
  }, []);
  console.log(articles);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {articles ? (
        articles.map((e) => (
          <div className="article" key={e.id}>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
          </div>
        ))
      ) : [1,2,3,4,5].map(e => <SkeletonArticle key={e.id} theme="dark"/>)
      }
    </div>
  );
}
