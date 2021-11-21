import React from "react";
import Skeleton from ".";
import "./style.css";
import Shimmer from "./Shimmer";

export default function SkeletonProfile({ theme }) {
  const themeClass = theme  || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <Skeleton type="avatar" />
        </div>
        <div>
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
