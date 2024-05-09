/* eslint-disable react/prop-types */

const RenderSection = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default RenderSection;
