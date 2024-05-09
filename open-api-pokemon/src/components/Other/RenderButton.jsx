/* eslint-disable react/prop-types */

const RenderButton = ({ onClick, children, className, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default RenderButton;
