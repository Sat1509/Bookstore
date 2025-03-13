
import React from 'react';
 // Create a Dystopian.css file
import RomanceMain from "../../components/sub/RomanceMain";
import { Link } from "react-router-dom";
const Romance = () => {
  return (
    <div>
      <RomanceMain />
      
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Romance;






