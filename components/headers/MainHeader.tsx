import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../../assets/artworks/Logo';
import LogoDark from '../../assets/artworks/LogoDark';

const MainHeader = () => {
  const { dark } = useTheme();

  return <View style={styles.container}>{dark ? <LogoDark /> : <Logo />}</View>;
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});
