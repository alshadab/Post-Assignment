import React from "react";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router-dom";
import "./Post.css";
const Post = ({ info }) => {
  const { id } = useParams();
  const { picture, firstName, lastName, title } = info[id].owner;
  return (
    <div className="post-div-main">
      <div className="post-div">
        <div className="first-part">
          <img src={picture} alt="img" />
          <div className="details-part">
            <h3>
              {`${title.toUpperCase()} ${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
            </h3>
            <h5>{`${info[id].id}`}</h5>
          </div>
        </div>
        <div className="second-part">
          <img src={info[id].image} alt="img" />
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>Publish Date:</span>{" "}
              {new Date(info[0].publishDate).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
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
                {info[0].likes}
              </p>
            </h5>
            <span>
              <p>
                <span style={{ fontWeight: "bold" }}> Tags:</span>
              </p>
              <span>
                {info[0].tags.map((data) => (
                  <p>{data.toUpperCase()}</p>
                ))}
              </span>
            </span>
          </div>
        </div>
        <div className="last-part">
          <h3>" {info[id].text} "</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
