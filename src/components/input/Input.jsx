import React from "react";

const Input = ({ onChange, value, type }) => {
  return <input type={type || 'text'} onChange={onChange} value={value} className="input" />;
};

export default Input;
