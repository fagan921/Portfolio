import Frankie from "../assets/images/Frankie1.jpeg"; // Import the image

function AboutMe() {
  return (
    <section>
      <h1>About Me</h1>
      <img src={Frankie} alt="Frankie" className="profile-photo" />
      <p>
        Hi! I'm a passionate web developer with experience in React, JavaScript, and modern web technologies.
        I love building clean, responsive, and user-friendly applications.
      </p>
    </section>
  );
}

export default AboutMe;
