import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

function Bulma(props) {
  return (
    <div id="first">
      <div className="columns is-tablet">
        <div className="column is-half">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img
                    src="https://source.unsplash.com/random/1280x960"
                    alt=" random image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{props.name}</strong> <br />{" "}
                    <small>{props.email}</small> <br />
                    <br /> {props.catchPhrase}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bulma;
