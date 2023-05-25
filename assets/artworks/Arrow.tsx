import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const Arrow = (props: SvgProps) => (
  <Svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12.317}
    {...props}
  >
    <G data-name="Layer 1">
      <Path data-name="Rectangle 559" fill="none" d="M0 .277h12v12H0z" />
      <Path
        data-name="Path 73"
        d="M10.768 5.288 1.628.11a.847.847 0 0 0-.889.032 1.006 1.006 0 0 0-.437.841v4.215l4.755.961L.302 7.232v4.1a1.006 1.006 0 0 0 .438.839.847.847 0 0 0 .888.032l9.129-5.177a1.027 1.027 0 0 0 .011-1.74Z"
        fill="#00e2c3"
      />
    </G>
  </Svg>
);

export default Arrow;
