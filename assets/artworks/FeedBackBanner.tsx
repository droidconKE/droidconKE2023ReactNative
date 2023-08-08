import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}

function FeedBackBanner(props: ISvgProps) {
  const { colors } = useTheme();
  const originalWidth = 412;
  const originalHeight = 179;
  const aspectRatio = originalWidth / originalHeight;
  return (
    <View style={styles(aspectRatio).svgContainer}>
      <Svg
        data-name="Group 384"
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        {...props}
      >
        <Defs>
          <ClipPath id="a">
            <Path data-name="Rectangle 693" transform="translate(232 -402)" fill={colors.primary} d="M0 0H412V179H0z" />
          </ClipPath>
        </Defs>
        <G data-name="Group 383">
          <G data-name="Group 382">
            <Path data-name="Rectangle 691" fill={colors.primary} d="M0 0H412V179H0z" />
            <G data-name="Mask Group 1" transform="translate(-232 402)" clipPath="url(#a)">
              <G transform="translate(338.688 -465.155)">
                <Path
                  data-name="Rectangle 692"
                  transform="rotate(45 -140.229 182.44)"
                  fill="#ff6e4d"
                  d="M0 0H91.444V124.36H0z"
                />
                <Path
                  data-name="Path 163"
                  d="M217.194 152.59l87.938-87.938L240.479 0l-87.938 87.938L64.733.129.08 64.782 240.592 305.31l64.669-64.669z"
                  transform="translate(.051)"
                  fill="#00e2c3"
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
}
const styles = (aspectRatio: number) => {
  return StyleSheet.create({
    svgContainer: {
      width: '100%',
      aspectRatio,
    },
  });
};

export default FeedBackBanner;
