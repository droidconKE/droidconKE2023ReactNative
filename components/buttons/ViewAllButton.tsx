import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import StyledText from '../common/StyledText';

type ViewAllButtonProps = {
  onPress: () => void;
  label: string;
};

/**
 * @returns Button component.
 * @param onPress: function - Navigate to the screeen to view all.
 * @param label: string - Label showing on the button.
 */

const ViewAllButton = ({ onPress, label }: ViewAllButtonProps) => {
  const { colors } = useTheme();

  const tallyContainerTint = {
    backgroundColor: colors.tint2,
  };

  return (
    <TouchableOpacity style={styles.row} onPress={onPress} testID="viewAllButton">
      <StyledText small medium colorLink>
        View All
      </StyledText>
      <View style={styles.gap} />
      <View style={[styles.tallyContainer, tallyContainerTint]}>
        <StyledText regular extraSmall colorLink>
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
