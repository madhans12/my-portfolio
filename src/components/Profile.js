import React from "react";
import profile from "./passportsizephoto (4).jpg";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-container1">
        <h1>
          Hai👋,
          <br />
          I'm Madhan,
          <br />
          FrondEnd ReactJS Developer.
        </h1>
        <div className="profile-pic">
          <img src={profile} alt="myprofile" className="profile" />
        </div>
      </div>
      <p>
        I aspire to fulfill a position that requires my active knowledge and
        skills in the field
        <br /> which offers goodness of career and being resourceful to my
        profession.
      </p>
    </div>
  );
};

export default Profile;
