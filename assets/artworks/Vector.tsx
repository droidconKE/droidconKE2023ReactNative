import * as React from 'react';
import Svg, { Circle, Defs, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg';
import type { ISvgProps } from '../../global';

const Vector = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 118 65" {...props}>
    <Defs>
      <LinearGradient id="prefix__a" x1={0.13} x2={0.865} y2={1.278} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#68dea4" />
        <Stop offset={1} stopColor="#843d95" />
      </LinearGradient>
    </Defs>
    <G data-name="Group 16">
      <G data-name="Group 14">
        <G data-name="Group 13" transform="translate(1 4)" opacity={0.17} fill="url(#prefix__a)">
          <Rect data-name="Rectangle 27" width={105} height={19} rx={9.5} transform="translate(0 14)" />
          <Rect data-name="Rectangle 28" width={88} height={18} rx={9} transform="translate(9 32)" />
          <Rect data-name="Rectangle 29" width={69} height={20} rx={10} transform="translate(9)" />
        </G>
        <Circle data-name="Ellipse 21" cx={3.5} cy={3.5} r={3.5} transform="translate(40)" fill="#00e2c3" />
        <Circle data-name="Ellipse 22" cx={3.5} cy={3.5} r={3.5} transform="translate(0 50)" fill="#000ceb" />
        <Circle data-name="Ellipse 24" cx={3.5} cy={3.5} r={3.5} transform="translate(111 13)" fill="#000ceb" />
        <Circle data-name="Ellipse 19" cx={2.5} cy={2.5} r={2.5} transform="translate(32 47)" fill="#00e2c3" />
        <Circle data-name="Ellipse 18" cx={2.5} cy={2.5} r={2.5} transform="translate(19 25)" fill="#ff6e4d" />
        <Circle data-name="Ellipse 20" cx={3} cy={3} r={3} transform="translate(71 59)" fill="#00e2c3" />
        <Path data-name="Polygon 6" d="m72.654 18.924-.173 10.398-8.747-5.05Z" fill="#ff6e4d" />
        <Path data-name="Polygon 7" d="m14.313 6.191 6.062-3.536v7.072Z" fill="#00e2c3" />
        <Path data-name="Polygon 8" d="m106.246 39.53-6.062 3.536v-7.072Z" fill="#000ceb" />
        <Path data-name="Polygon 9" d="m53.713 54.684-6.062 3.536v-7.072Z" fill="#ff6e4d" />
      </G>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Path data-name="Rectangle 30" fill="none" d="M33 7h50v51H33z" />
          <Path
            data-name="Path 37"
            d="M82.878 48.763c-1.253-.222-3.8-.909-4.041-1.01a13.649 13.649 0 0 1-7.446-4.455 22.942 22.942 0 0 1-2.546-4.1c-1.384-2.748-2.475-5.657-4.243-8.163s-4.4-4.637-7.466-4.829a23.751 23.751 0 0 0-4.3.384 11.113 11.113 0 0 1-5.688-.687 10.476 10.476 0 0 1-4.528-4.312 18.1 18.1 0 0 1-1.323-2.748c-.212-.525-.4-1.091-.576-1.647-.061-.212-.131-.737-.232-1.162a7.072 7.072 0 0 1-5.415 2.546 7.648 7.648 0 0 1-1.88-.266c.081.182.162.343.172.384.273.667.546 1.334.849 2.021a41.038 41.038 0 0 0 2.021 3.91 17.417 17.417 0 0 0 5.92 6.213h.071a17.781 17.781 0 0 0 8.456 2.1c2.93.081 5.859-.263 8.789-.465a2.738 2.738 0 0 1 1.687.263 2.718 2.718 0 0 1 .818 1.071c2.263 4.334 4.041 9.153 8.143 12.123 3.647 2.6 8.082 3.677 12.5 4.374a.778.778 0 0 0 .9-.677.768.768 0 0 0-.636-.869Z"
            fill="#000ceb"
          />
          <Path
            data-name="Path 38"
            d="M40.266 15.466s-3.556-3.031-7.264 2.303a6.6 6.6 0 0 0 7.264-2.3Z"
            fill="#000ceb"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default Vector;
