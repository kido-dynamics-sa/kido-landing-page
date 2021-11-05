/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const MdExpandMore = ({ color = 'primary' }) => (
  <svg
    sx={{ color: color }}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="16px"
    width="16px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
  </svg>
);

export default MdExpandMore