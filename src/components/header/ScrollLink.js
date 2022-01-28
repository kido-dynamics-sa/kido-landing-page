/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-scroll";

const ScrollLink = ({ path, label, i }) => (
  <Link
    activeClass="active"
    to={path}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
    key={i}
    style={{ overflow: "hidden", whiteSpace: "nowrap" }}
  >
    {label}
  </Link>
);

export default ScrollLink;
