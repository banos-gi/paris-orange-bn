import React, { useRef, useState } from "react";
import MainImage from "../assets/main-image.jpg";
import ArrowIcon from "./ArrowIcon";
import Edit from "./Edit";
import Input from "./input/Input";
import Modal from "./modal/Modal";

const MainContainer = () => {
  const [isShow, setIsShow] = useState("");
  const [state, setState] = useState({
    header: "Hi! I Am Richard Brian",
    subHeading:
      "Designing user interfaces for over 7 years as a Product Designer",
    hireButtonText: "Hire Me",
    hireButtonLink: "http://localhost:5173/hire",
    projectButtonLink: "http://localhost:5173/project",
    projectButtonText: "Projects",
    clients: 84,
    projects: 576,
    contact: "hello@richardbrian.xyz",
    image: MainImage,
  });
  const imageRef = useRef(null);

  return (
    <div className="main-container">
      <div className="main-box primary">
        <section className="portfolio-details">
          <div className="details-heading">
            <h1 className="main-heading">{state.header}</h1>
            <Edit right="15rem" onClick={() => setIsShow("header")} />
          </div>

          <div className="details-subheading">
            <p>{state.subHeading}</p>
            <Edit onClick={() => setIsShow("subHeading")} />
          </div>

          <div className="details-cta">
            <div className="button-wrapper">
              <a href={state.hireButtonLink} className="cta-primary">
                {state.hireButtonText}
              </a>
              <Edit onClick={() => setIsShow("hire")} />
            </div>
            <div className="button-wrapper">
              <a href={state.projectButtonLink} className="cta-secondary">
                {state.projectButtonText} <ArrowIcon />
              </a>
              <Edit onClick={() => setIsShow("project")} />
            </div>
          </div>

          {/* analytics */}
          <div className="details-analytics">
            <Edit right="6rem" onClick={() => setIsShow("analytics")} />
            <div className="analytics-content">
              <h1>+84</h1>
              <p>Clients worldwide</p>
            </div>

            <div className="two-grid">
              <div className="analytics-content">
                <h1>572</h1>
                <p>Projects Done</p>
              </div>
              <div className="analytics-content">
                <h1>Contact</h1>
                <p>hello@richardbrian.xyz</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="portfolio-footer">
          <div className="grid">
            <div className="grid-content">
              <h2>
                Project <br /> Statistics 2022
              </h2>
              <button>Know More</button>
            </div>
            <ul className="links">
              <li>
                <p>Website Design</p>
                <p>75</p>
              </li>
              <li>
                <p>Mobile App Design</p>
                <p>64</p>
              </li>
              <li>
                <p>Brand Identity</p>
                <p>37</p>
              </li>
            </ul>
          </div>

          <p className="footer-note">© Richard Brian 2022</p>
        </footer>
      </div>

      <div className="main-box secondary">
        {/* <Edit top="6rem" right="6rem" onClick={() => setIsShow("image")} /> */}
        <img className="main-image" src={MainImage} alt="main-image" />
      </div>

      {isShow === "header" ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            value={state.header}
            onChange={(e) =>
              setState((prev) => ({ ...prev, header: e.target.value }))
            }
          />
        </Modal>
      ) : null}
      {isShow === "subHeading" ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            value={state.subHeading}
            onChange={(e) =>
              setState((prev) => ({ ...prev, subHeading: e.target.value }))
            }
          />
        </Modal>
      ) : null}
      {isShow === "hire" ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            value={state.hireButtonText}
            onChange={(e) =>
              setState((prev) => ({ ...prev, hireButtonText: e.target.value }))
            }
          />
          <Input
            value={state.hireButtonLink}
            onChange={(e) =>
              setState((prev) => ({ ...prev, hireButtonLink: e.target.value }))
            }
          />
        </Modal>
      ) : null}
      {isShow === "project" ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            value={state.projectButtonText}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                projectButtonText: e.target.value,
              }))
            }
          />
          <Input
            value={state.projectButtonLink}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                projectButtonLink: e.target.value,
              }))
            }
          />
        </Modal>
      ) : null}
      {isShow === "analytics" ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            value={state.clients}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                clients: e.target.value,
              }))
            }
          />
          <Input
            value={state.projects}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                projects: e.target.value,
              }))
            }
          />
          <Input
            value={state.contact}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                contact: e.target.value,
              }))
            }
          />
        </Modal>
      ) : null}

      {isShow === "image" ? (
        <Modal onClose={() => setIsShow("")}>
          <Input
            type="file"
            onChange={(e) => {
              setState((prev) => ({
                ...prev,
                image: e.target.value,
              }));
              imageRef.current.src = e.target.value
            }}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default MainContainer;
