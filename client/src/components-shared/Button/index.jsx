import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Link as LinkRouter } from "react-router-dom";

const Button = ({
  appearance,
  children,
  className,
  diameter,
  isExternalLink,
  link,
  onClick,
  type,
  ...props
}) => {
  const _className = classNames(className, styles.button, styles[appearance], {
    [styles.round]: diameter,
  });
  const _style = {
    ...(diameter ? { width: `${diameter}px`, height: `${diameter}px` } : {}),
  };

  if (link) {
    if (isExternalLink)
      return (
        <a href={link} className={_className} style={_style} {...props}>
          {children}
        </a>
      );

    return (
      <LinkRouter to={link} className={_className} style={_style} {...props}>
        {children}
      </LinkRouter>
    );
  }

  return (
    <button className={_className} style={_style} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf(["default", "alt"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  // if diameter is present then it becomes round
  diameter: PropTypes.number,
  isExternalLink: PropTypes.bool,
  // if link is present then html el is a not button
  link: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  appearance: "default",
  onClick: () => {},
  type: "button",
};

export default Button;
