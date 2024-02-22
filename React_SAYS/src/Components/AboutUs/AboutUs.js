import React from "react";
import styles from "./AboutUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import FirstSection from "../../Components/Home/FirstSection/FirstSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../Components/Common/NavBar/NavBar";
import Footer from "../../Components/Common/Footer/Footer";
const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rupesh",
      imageUrl: "https://bootstrapious.com/i/snippets/sn-about/avatar-3.png",
    },
    {
      name: "Sai Teja",
      imageUrl: "https://bootstrapious.com/i/snippets/sn-about/avatar-2.png",
    },
    {
      name: "Kusuma",
      imageUrl: "https://bootstrapious.com/i/snippets/sn-about/avatar-4.png",
    },
    {
      name: "Mukesh",
      imageUrl: "https://bootstrapious.com/i/snippets/sn-about/avatar-1.png",
    },
    {
      name: "Arun",
      imageUrl: "https://bootstrapious.com/i/snippets/sn-about/avatar-1.png",
    },
  ];
  return (
    <>
      <NavBar firstsection={FirstSection} pagename="Movies" />

      <div className={styles.aboutusdiv1}>
        <Container style={{ maxWidth: "1320px" }}>
          <Row>
            <Col>
              <h1
                className={styles.h1}
                style={{
                  color: "gold",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                {" "}
                About Us{" "}
              </h1>
              <p className={styles.p}>
                Welcome respective visitors to <strong>SAYS</strong> (Service At
                Your Seat).SAYS website is always ready to help you and our aim
                is to save your time and provide you a wonderful experience at
                Movie Theatre(s) without any interruptions for your
                entertainment.
              </p>
            </Col>
            <Col>
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
              />
              {/* <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" /> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.aboutusdiv5}>
        <Container>
          <Row>
            <Col className={styles.goalPara}>
              <h1
                class="display-2 font-weight-normal text-center py-3 "
                style={{ color: "gold" }}
              >
                {" "}
                Our Goal{" "}
              </h1>
              <p className={styles.p}>
                {" "}
                We are a team of movie enthusiasts who are passionate about
                bringing the best movie-watching experience to our users. Our
                mission is to provide a user-friendly platform where movie
                lovers can easily browse and book tickets for the movies they
                love. read reviews and ratings from other users, and find
                personalized recommendations based on their preferences. We
                believe that watching movies should be a fun and enjoyable
                experience, and we strive to make that experience as seamless
                and enjoyable as possible.
              </p>
            </Col>
            <Col>
              <img
                className={styles.goalImg}
                src={require("./images/h1.png")}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.aboutusdiv2}>
        <Container>
          <h2></h2>
          <h2 class="display-4 font-weight-light text-center text-white">
            Get to know Us{" "}
          </h2>
          <p class="font-italic text-center text-muted">
            Contact details of our team.{" "}
          </p>
        </Container>
      </div>

      <div className={styles.aboutusdiv3}>
        <Container>
          <Row>
            {teamMembers.map((member, index) => (
              <Col key={index}>
                <div className={styles.column}>
                  <div className={styles.knowcard}>
                    <img src={member.imageUrl} alt={member.name} />
                    <h5>{member.name}</h5>
                    <span>CEO-Founder</span>
                    <ul className={styles.socialList}>
                      <li className={styles.li}>
                        <a href="/">
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            size="sm"
                            style={{ color: "#0A66C2" }}
                          />
                        </a>
                      </li>
                      <li className={styles.li}>
                        <a href="/">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            size="sm"
                            style={{ color: "#0A66C2" }}
                          />
                        </a>
                      </li>
                      <li className={styles.li}>
                        <a href="/">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            size="sm"
                            style={{ color: "#ff0000" }}
                          />
                        </a>
                      </li>
                      <li className={styles.li}>
                        <a href="/">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size="sm"
                            style={{ color: "#0A66C2" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
