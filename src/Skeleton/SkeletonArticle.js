import React from "react";
import Skeleton from ".";
import "./style.css";
import Shimmer from "./Shimmer"
export default function SkeletonArticle({ theme }) {
  const themeClass = theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skelton-article">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
      <Shimmer/>
    </div>
  );
}
