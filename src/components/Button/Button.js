import React from 'react';
import { func, node, oneOfType, string } from 'prop-types';


export const Button = ({ className, onClick, children }) => (
  <button className={`button ${className}`} onClick={onClick}>{children}</button>
);


Button.propTypes = {
  className: string,
  onClick: func.isRequired,
  children: oneOfType([
    string,
    node
  ]).isRequired
};

Button.defaultProps = {
  className: ''
}
