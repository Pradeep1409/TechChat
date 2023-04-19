import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,MY Team Member <span className="purple">Pradeep Prajapati, Om Singh, Yash Yadav, Manish gupta </span>
            from <span className="purple"> Mumbai, India.
            </span>
            <br></br>
            <br />We all are studing Computer Enginerring (3rd Year) from Lokmanya Tilak College of Engineering
            <br />
            <br />
            Apart from coding, some other activities that We love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing  Games(Cricket,BGMI)
            </li>
            <li className="about-activity">
              <ImPointRight />Solving problem on Data structure
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and explore new Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Alone we can do so little; together we can do so much."{" "}
          </p>
          <footer className="blockquote-footer">Helen Keller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
