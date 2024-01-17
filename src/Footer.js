import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      {length === 0 ? (
        <p>Your list is empty.</p>
      ) : length === 1 ? (
        <p>{length} List Item</p>
      ) : (
        <p>{length} List Items</p>
      )}
    </footer>
  );
};

export default Footer;
