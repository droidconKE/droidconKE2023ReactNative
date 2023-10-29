import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { ISponsor, ISponsors } from '../../global';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type Props = {
  sponsors: ISponsors;
};

const SponsorsCard = ({ sponsors }: Props) => {
  const { colors } = useTheme();

  const renderSponsors = (sponsorType: string) => {
    return sponsors?.data
      .filter((sponsor: ISponsor) => sponsor.sponsor_type === sponsorType)
      .map((sponsor, index) => (
        <Image
          key={index}
          source={{ uri: sponsor.logo }}
          style={sponsorType === 'gold' ? styles.goldLogo : styles.logo}
          transition={1000}
          contentFit="contain"
        />
      ));
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <StyledText size="xl" font="bold" variant="link">
        Sponsors
      </StyledText>
      <Space size={8} />
      <View style={styles.sponsorRow}>{renderSponsors('gold')}</View>
      <View style={styles.sponsorRow}>{renderSponsors('silver')}</View>
      <View style={styles.sponsorRow}>{renderSponsors('bronze')}</View>
    </View>
  );
};

export default SponsorsCard;

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
  sponsorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
  goldLogo: {
    width: '50%',
    height: 60,
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 8,
  },
  logo: {
    width: '30%',
    height: 60,
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 8,
  },
});
