
import React from 'react';
 // Create a Dystopian.css file
import "./css/Dystopian.css"
import WatchMeShowcase from "../../components/sub/WatchMeShowcase";
import DystopianHeader from "../../components/sub/DystopianHeader";
import { Link } from "react-router-dom";
const Dystopian = () => {
  return (
    <div className="dystopian-page-container"> {/* Added this container */}
      <DystopianHeader />
      <WatchMeShowcase />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Dystopian;






