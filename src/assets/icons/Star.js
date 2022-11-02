import * as React from "react";

const Star = (props) => (
  <svg
    width={props.width || 60}
    height={props.height || 60}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.973 7.558a.566.566 0 0 0-.448-.395l-6.24-.93-2.807-5.91A.554.554 0 0 0 9.98 0a.551.551 0 0 0-.496.327L6.714 6.255l-6.24.972a.566.566 0 0 0-.447.396.593.593 0 0 0 .144.593l4.527 4.596-1.047 6.509c-.036.219.05.438.222.567a.532.532 0 0 0 .583.043l5.57-3.09 5.587 3.056a.546.546 0 0 0 .255.064c.303 0 .554-.262.554-.58a.474.474 0 0 0-.017-.133l-1.08-6.47 4.5-4.622a.587.587 0 0 0 .148-.598Zm-5.624 4.604a.591.591 0 0 0-.156.516l.94 5.645-4.852-2.652a.539.539 0 0 0-.517 0l-4.836 2.682.907-5.653a.597.597 0 0 0-.16-.512l-3.924-3.99 5.414-.842a.553.553 0 0 0 .415-.318l2.405-5.146 2.439 5.133a.567.567 0 0 0 .418.318l5.419.808-3.912 4.011Z"
      fill="#000"
    />
  </svg>
);

export default Star;