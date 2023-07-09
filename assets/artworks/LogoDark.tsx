import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Text, TSpan } from 'react-native-svg';
import type { ISvgProps } from '../../global';

const LogoDark = (props: ISvgProps) => (
  <Svg width={137} height={25.489} {...props}>
    <Defs>
      <ClipPath id="prefix__a">
        <Path data-name="Rectangle 2" fill="none" d="M0 0h137v25.489H0z" />
      </ClipPath>
    </Defs>
    <G data-name="Group 363">
      <G data-name="Group 1" clipPath="url(#prefix__a)">
        <Path
          data-name="Path 1"
          d="M83.413 6.015a6.941 6.941 0 1 0 6.941 6.941 6.951 6.951 0 0 0-6.941-6.941m0 10.7a3.763 3.763 0 1 1 3.763-3.763 3.778 3.778 0 0 1-3.763 3.763"
          fill="#fff"
        />
        <Path
          data-name="Path 2"
          d="M31.928 6.015a6.956 6.956 0 1 0 6.941 6.941 6.951 6.951 0 0 0-6.941-6.941m0 10.7a3.763 3.763 0 1 1 3.763-3.763 3.778 3.778 0 0 1-3.763 3.763"
          fill="#fff"
        />
        <Path
          data-name="Path 3"
          d="M13.943 12.956V0H10.7v7.095a7.072 7.072 0 0 0-3.76-1.08 6.941 6.941 0 1 0 7 6.941M7 16.72a3.748 3.748 0 1 1 3.763-3.732A3.778 3.778 0 0 1 7 16.72"
          fill="#fff"
        />
        <Path
          data-name="Path 4"
          d="M61.048 0h-3.24v7.095a7.067 7.067 0 0 0-3.763-1.079 6.941 6.941 0 1 0 6.941 6.941V0h.062m-6.972 16.72a3.763 3.763 0 1 1 3.763-3.763 3.778 3.778 0 0 1-3.763 3.763"
          fill="#fff"
        />
        <Path data-name="Rectangle 1" fill="#fff" d="M41.336 6.015h3.239v13.943h-3.239z" />
        <Path
          data-name="Path 5"
          d="M16.442 12.956v6.941h3.239v-6.941a3.778 3.778 0 0 1 3.763-3.766V5.984a7.011 7.011 0 0 0-7 6.972"
          fill="#fff"
        />
        <Path
          data-name="Path 6"
          d="M72.616 15.614a3.682 3.682 0 0 1-2.622 1.079 3.763 3.763 0 1 1 0-7.527 3.629 3.629 0 0 1 2.622 1.08l2.283-2.283a6.948 6.948 0 1 0-4.936 11.846 7.106 7.106 0 0 0 4.936-2.036Z"
          fill="#fff"
        />
        <Path
          data-name="Path 7"
          d="M99.608 6.015a6.951 6.951 0 0 0-6.941 6.941v6.941h3.239v-6.941a3.764 3.764 0 0 1 7.527 0v6.941h3.239v-6.941a7.119 7.119 0 0 0-7.064-6.941"
          fill="#fff"
        />
        <Path
          data-name="Path 8"
          d="M31.927 11.167a1.789 1.789 0 1 1-1.789 1.789 1.789 1.789 0 0 1 1.789-1.789"
          fill="#fb7b3c"
        />
        <Text
          transform="translate(107.895 18.505)"
          fill="#fb7b3c"
          fontSize={20}
          // fontFamily={"Rubik-Light, Rubik"}
          fontWeight={300}
        >
          <TSpan x={0} y={0} letterSpacing="-.029em">
            {'K'}
          </TSpan>
          <TSpan y={0}>{'e.'}</TSpan>
        </Text>
      </G>
    </G>
  </Svg>
);

export default LogoDark;
