/* eslint-disable react/prop-types */

const RenderList = ({ title, items, ...props }) => (
  <div {...props}>
    {title && <h3>{title}</h3>}
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
export default RenderList;
