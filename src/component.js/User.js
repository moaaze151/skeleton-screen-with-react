import React, { useState, useEffect } from "react";
import SkeletonProfile from "../Skeleton/SkeletonProfile";

export default function User() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
      const data = await res.json();
      setProfile(data);
    },5000);
  }, []);
  console.log(profile);
  return (
    <div className="user">
      <h2>User Details</h2>

      {profile ? (
        <div>
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website} target="_blank" rel="noreferrer">
            {profile.website}
          </a>
        </div>
      ) : (
        <SkeletonProfile theme="dark"/>
      )}
    </div>
  );
}
