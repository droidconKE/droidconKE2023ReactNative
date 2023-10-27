import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { IOrganizers } from '../../global';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type Props = {
  organizers: IOrganizers;
};

const OrganizersCard = ({ organizers }: Props) => {
  const { colors } = useTheme();

  const renderOrganizers = () => {
    return organizers?.data.map((organizer, index) => (
      <Image key={index} source={{ uri: organizer.logo }} style={styles.logo} transition={1000} contentFit="contain" />
    ));
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <StyledText size="xl" font="bold" variant="link">
        Organised by:
      </StyledText>
      <Space size={16} />
      <View style={styles.row}>{renderOrganizers()}</View>
    </View>
  );
};

export default OrganizersCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
  logo: {
    width: '30%',
    height: 60,
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 8,
  },
});
