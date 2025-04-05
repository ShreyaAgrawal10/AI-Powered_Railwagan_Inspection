import styled from "styled-components";
import Header from "../Components/Header";
const teamMembers = [
  { name: "Prem Joshi", role: "Lead Developer" },
  { name: "Nikhil Raval", role: "UI/UX Designer" },
  { name: "Laksh Trivedi", role: "Machine Learning Engineer" },
  { name: "Shreya Agarwal", role: "Project Manager" },
  { name: "Veena Gidwani", role: "Project Manager" },
];

const About = () => {
  return (
    <>
        <Header />
      <StyledWrapper>
        <h1>About Us</h1>
        <p>Meet the passionate individuals behind our project.</p>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="card">
              <img src="src/assets/images/Laksh.jpg" className="object-contain w-full" alt={member.name} />
              {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
              </svg> */}
              <div className="card__content">
                <p className="card__title">{member.name}</p>
                <p className="card__description">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #FBFBFB; /* Match header background */
  color: white;
  height: 100vh;

  h1 {
    font-size: 36px;
    color: #1a202c;
  }

  p {
    font-size: 18px;
    color: #696A6BFF; /* Light grayish text */
    margin-bottom: 30px;
  }

  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .card {
    position: relative;
    width: 250px;
    height: 150px;
    background: linear-gradient(
      -45deg,
      #3182ce 0%,
      #805ad5 100%
    ); /* Dark blue to purple */
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    object-fit: fill;
  }

  .card svg {
    width: 40px;
    fill: #edf2f7; /* Light icon */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #2d3748; /* Dark gray for contrast */
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #a0aec0; /* Light gray text */
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }
`;

export default About;
