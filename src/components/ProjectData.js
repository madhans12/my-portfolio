export const Project = {
  projects: [
    {
      id: 1,
      name: "TODO-LIST",
      githublink: "https://github.com/madhans12/todo-list",
      hostedlink: "https://madhans12.github.io/todo-list/",
    },
    {
      id: 2,
      name: "WEATHER APP",
      githublink: "https://github.com/madhans12/weatherapp",
      hostedlink: "https://madhans12.github.io/weatherapp/",
    },
    {
      id: 3,
      name: "BMI-CALC",
      githublink: "https://github.com/madhans12/BMI-CALC",
      hostedlink: "https://madhans12.github.io/BMI-CALC/",
    },
    {
      id: 4,
      name: "STOP TIMER",
      githublink: "https://github.com/madhans12/STOP-TIMER",
      hostedlink: "https://madhans12.github.io/STOP-TIMER/",
    },
    {
      id: 5,
      name: "YOU-TUBE",
      githublink: "https://github.com/madhans12/youtube",
      hostedlink: "https://madhans12.github.io/youtube/",
    },
    {
      id: 6,
      name: "DETAILS FORM",
      githublink: "https://github.com/madhans12/PERSONAL-DETAIL-FORM",
      hostedlink: "https://madhans12.github.io/PERSONAL-DETAIL-FORM/",
    },
    {
      id: 7,
      name: "Login & Signup Page",
      githublink: "https://github.com/madhans12/login-signup-page",
      hostedlink: "https://madhans12.github.io/login-signup-page/",
    },
    {
      id: 8,
      name: "IMAGE CAROUSEL",
      githublink: "https://github.com/madhans12/wallpaper-carousel",
      hostedlink: "https://madhans12.github.io/wallpaper-carousel/",
    },
    {
      id: 9,
      name: "STORY GENERATOR",
      githublink: "https://github.com/madhans12/StoryGenerator",
      hostedlink: "https://madhans12.github.io/StoryGenerator/",
    },
    {
      id: 10,
      name: "CAR SELLING",
      githublink: "https://github.com/madhans12/CarSellerWebsite",
      hostedlink: "https://madhans12.github.io/CarSellerWebsite/",
    },
    {
      id: 11,
      name: "HOTEL LISTING",
      githublink: "https://github.com/madhans12/HotelListing",
      hostedlink: "https://madhans12.github.io/HotelListing/",
    },
  ],
};

const ProjectComp = ({ project }) => {
  return (
    <div className="project-comp">
      <div className="project-title">
        <h3>{project.name}</h3>
      </div>
      <div className="project-link">
        <a href={project.githublink} target="blank" className="github-link">
          GitHub
        </a>{" "}
        <a href={project.hostedlink} className="host-link">
          DEMO
        </a>
      </div>
    </div>
  );
};
export default ProjectComp;
