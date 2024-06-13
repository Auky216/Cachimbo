import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 20v-5h1v3.292l3.6-3.6.708.708-3.6 3.6H9v1zm11 0v-1h3.292l-3.6-3.6.708-.708 3.6 3.6V15h1v5zM8.6 9.308 5 5.708V9H4V4h5v1H5.708l3.6 3.6zm6.8 0-.708-.708 3.6-3.6H15V4h5v5h-1V5.708z"
    />
  </svg>
)
export default SvgComponent
