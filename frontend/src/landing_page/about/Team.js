import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../home/HomePage";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mb-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 "
        style={{ lineHeight: "2.0", fontSize: "1.1em" }}
      >
        <div className="col-6 p-3 text-center text-muted">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 mt-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to={"/"}>Homepage</Link> /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
