import PropTypes from "prop-types";
import { Children } from "react";

export default function Section({ title, children }) {
  // const mappedChildren = Children.map(children, child =>
  //   <div className="Row">
  //     {child}
  //   </div>
  // );
  console.log("title", title);
  console.log(typeof children);
  console.log("children", children);
  console.log("==================");

  const mappedChildren = Children.map(children, (child) => <div className="Row">{child}</div>);
  return (
    <>
      <h2>{title}</h2>
      {mappedChildren}
      {/* <h1>Total rows: {Children.count(children)}</h1> */}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
