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
      <div className="profile-link">
        <a
          href="https://github.com/madhans12"
          target="blank"
          className="github-link github"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/madhan-s-884b6b284/"
          target="blank"
          className="linkedin"
        >
          Linkedin
        </a>
        <a
          href="https://www.naukri.com/mnjuser/profile?id=&altresid"
          target="blank"
          className="naukri"
        >
          Naukri
        </a>
        <a
          href="https://drive.google.com/file/d/1OkxLr5GaaQsGamLi3TAxqbf0KwrnO0Rd/view?usp=drive_link"
          target="blank"
          className="resume"
        >
          Resume
        </a>
      </div>
      <p>
        I aspire to fulfill a position that requires my active knowledge and
        skills in the field which offers goodness of career and being
        resourceful to my profession.
      </p>
    </div>
  );
};

export default Profile;
