// importing react because it has to be in within the scope in order to be read by javascript
import React from "react";
// importing the "ListItem" component from its respective file
import { ListItem } from "../List";
// importing the "Row" and "Col" componenets from the Grid component folder
import { Row, Col } from "../Grid";
// importing the style.css file within the Book folder
import "./style.css";

// creating a functional component that takes in the title, subtitle, authors, link, description, image, and Button props as parameters
function Book({ title, subtitle, authors, link, description, image, Button }) {
  // returning the component
  return (
    // JSX for the given component
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/* h3 tag passed the title prop */}
          <h3 className="font-italic">{title}</h3>
          {/* subtitle prop and an h5 tag with className "font-italic" passing in the subtitle prop */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {/* paragraph tag with the authors prop passed in  */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          {/* img with the src attribute set equal to the image prop and the alt attribute set equal to the title prop */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          {/* paragraph tag with the description prop passed in */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

// export Book prop (not sure what default is doing)
export default Book;
