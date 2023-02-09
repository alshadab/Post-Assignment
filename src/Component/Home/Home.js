import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import "./Home.css";
const Home = ({ info }) => {
  const newData = info.slice(0, 6);

  return (
    <Container>
      <Row className="link">
        {newData.map((elem, index) => {
          const { firstName, lastName, title } = elem.owner;
          return (
            <Col lg={4} md={6}>
              <Link to={`/post/${index}`}>
                <div id={index} className="post-box">
                  <div className="info-part">
                    <img src={elem.owner.picture} alt="img" />
                    <div className="info-part2">
                      <p>{`${title.toUpperCase()} ${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</p>
                      <p style={{ color: "gray" }}>
                        {new Date(elem.publishDate).toLocaleDateString(
                          "en-us",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="post">
                    <img src={elem.image} alt="" />
                    <h5
                      style={{
                        display: "flex",
                        marginTop: "10px",
                      }}
                    >
                      <FcLike />{" "}
                      <p
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        {elem.likes}
                      </p>
                    </h5>
                    <div className="text">
                      <p>{`" ${elem.text.toUpperCase()}... see more`}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
