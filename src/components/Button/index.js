import React from "react";
import PropTypes from "prop-types";

const variants = { FillBlue800: "bg-blue_800 text-white_A700" };
const sizes = { sm: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  variant: PropTypes.oneOf(["FillBlue800"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  variant: "FillBlue800",
  size: "sm",
};

export { Button };
