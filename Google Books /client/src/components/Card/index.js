// import React within current scope
import React from "react";


// functional component called Card that is passed the icon, title, and children props
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* bold i tag passed in the icon prop as the className and the title prop */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* passing in the children prop as the body of the card.  */}
      {/* This will populate whatever is set as the children prop into the body of the card */}
      <div className="card-body">{children}</div>
    </div>
  );
}

// export the Card component
export default Card;
