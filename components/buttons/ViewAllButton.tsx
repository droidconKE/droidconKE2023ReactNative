import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import StyledText from '../common/StyledText';

type ViewAllButtonProps = {
  onPress: () => void;
  label: string;
};

const ViewAllButton = ({ onPress, label }: ViewAllButtonProps) => {
  const { colors } = useTheme();

  const tallyContainerTint = {
    backgroundColor: colors.tint2,
  };

  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <StyledText small medium tint2>
        View All
      </StyledText>
      <View style={styles.gap} />
      <View style={[styles.tallyContainer, tallyContainerTint]}>
        <StyledText regular extraSmall tint2>
          {label}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default ViewAllButton;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tallyContainer: {
    borderRadius: 11,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  gap: {
    width: 8,
  },
});
