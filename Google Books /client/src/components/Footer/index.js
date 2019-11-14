// import React
import React from "react";

// functioncal component called Footer and it is not passed any props so it will just have hard coded content
function Footer() {
  return (
    // JSX footer 
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

// export footer
export default Footer;
