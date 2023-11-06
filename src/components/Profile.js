import React, { useState } from "react";
import profile from "./passportsizephoto (4).jpg";

const Profile = () => {
  const [hover, setHover] = useState(true);

  return (
    <div className="profile-container">
      {hover ? <em className="hover">Hover Me</em> : <em>I'm</em>}

      <div
        className="madhan"
        onMouseOver={() => {
          setHover(false);
        }}
        onMouseOut={() => {
          setHover(true);
        }}
      >
        <div className="m">
          <div className="m1"></div>
          <div className="m2"></div>
          <div className="m3"></div>

          <div className="m1"></div>
        </div>
        <div className="a">
          <div className="a1"></div>
          <div className="a2"></div>
          <div className="a3"></div>
        </div>
        <div className="d">
          <div className="d1"></div>
        </div>
        <div className="h">
          <div className="h1"></div>
          <div className="h2"></div>
          <div className="h1"></div>
        </div>
        <div className="a">
          <div className="a1"></div>
          <div className="a2"></div>
          <div className="a3"></div>
        </div>
        <div className="n">
          <div className="n1"></div>
          <div className="n2"></div>
          <div className="n1"></div>
        </div>
      </div>
      <div className="profile-container1">
        <h1>
          Hai👋,
          <br />
          I'm Madhan,
          <br />
          FrondEnd ReactJS Developer.
        </h1>
        <div className="profile-pic">
          <img
            src={profile}
            alt="myprofile"
            className="profile"
            title="Photo"
          />
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
      <div className="profile-sum">
        <p>
          I aspire to fulfill a position that requires my active knowledge and
          skills in the field which offers goodness of career and being
          resourceful to my profession.
        </p>
      </div>
    </div>
  );
};

export default Profile;
