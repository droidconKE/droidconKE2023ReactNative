import React from 'react';
import Svg, { Ellipse, G, Line } from 'react-native-svg';
import type { ISvgProps } from '../../global';

const SessionListSeparator = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="6" height="24.37" viewBox="0 0 6 24.37" {...props}>
    <G id="Group_48" data-name="Group 48" transform="translate(0.296)">
      <Line
        id="Line_4"
        data-name="Line 4"
        y2="24.37"
        transform="translate(2.901 0)"
        fill="none"
        stroke={props.color}
        stroke-width="1"
      />
      <Ellipse
        id="Ellipse_29"
        data-name="Ellipse 29"
        cx="3"
        cy="2.5"
        rx="3"
        ry="2.5"
        transform="translate(-0.296 10.321)"
        fill={props.color}
      />
    </G>
  </Svg>
);

export default SessionListSeparator;
