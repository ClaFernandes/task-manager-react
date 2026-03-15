import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      {...props}
      className={`bg-slate-400 text-white p-2 rounded-md ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
