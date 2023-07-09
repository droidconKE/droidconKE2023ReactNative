import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { ISvgProps } from '../../global';

const StarIcon = (props: ISvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.fontSize || 22}
    height={props.fontSize || 22}
    fill={props.fill || 'white'}
    viewBox={props.viewBox || '0 0 22 22'}
    {...props}
  >
    <G data-name="Layer 2">
      <G data-name="Layer 1">
        <Path data-name="Rectangle 593" fill="none" d="M.491.214h21v21h-21z" />
        <Path
          data-name="Path 114"
          d="M20.804 8.226a.493.493 0 0 0-.418-.338l-6.2-.9-2.778-5.631a.5.5 0 0 0-.894 0L7.736 6.985l-6.212.9a.5.5 0 0 0-.276.836l4.491 4.4-.025.146-1.022 6.042a.489.489 0 0 0 .2.489.48.48 0 0 0 .526.038l5.556-2.924 5.556 2.924a.5.5 0 0 0 .694-.526l-1.044-6.187 4.491-4.382a.489.489 0 0 0 .133-.515Z"
          fill={props.fill}
        />
        <Path
          data-name="Path 115"
          d="M21.352 8.05a1.065 1.065 0 0 0-.869-.735l-5.912-.856-2.644-5.358a1.078 1.078 0 0 0-1.93 0L7.352 6.458l-5.912.856a1.074 1.074 0 0 0-.869.735 1.061 1.061 0 0 0 .272 1.1l4.27 4.169-1 5.886a1.078 1.078 0 0 0 1.562 1.136l5.289-2.757 5.285 2.757a1.1 1.1 0 0 0 .506.125 1.061 1.061 0 0 0 .631-.2 1.082 1.082 0 0 0 .418-1.057l-.99-5.886 4.274-4.178a1.061 1.061 0 0 0 .264-1.094Zm-5.168 5.072 1.044 6.187a.5.5 0 0 1-.723.526l-5.556-2.924-5.557 2.924a.48.48 0 0 1-.526-.038.489.489 0 0 1-.171-.489l1.036-6.041.025-.146-4.508-4.382a.5.5 0 0 1 .276-.838l6.212-.9 2.782-5.644a.5.5 0 0 1 .894 0l2.778 5.627 6.212.9a.5.5 0 0 1 .276.836Z"
          fill={props.color}
          stroke={props.color}
        />
      </G>
    </G>
  </Svg>
);

export default StarIcon;
