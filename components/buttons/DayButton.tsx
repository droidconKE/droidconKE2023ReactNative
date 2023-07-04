import { useTheme } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type DayButtonProps = {
  handlePress: () => void;
  date: string;
  day: string;
  selected?: boolean;
};

/**
 * @returns DayButton component
 * @param handlePress: () => void
 * @param date: string
 * @param day: string
 * @param selected: boolean
 */

const DayButton = (props: DayButtonProps) => {
  const { handlePress, date, day, selected } = props;

  const { colors } = useTheme();
  return (
    <Pressable
      onPress={handlePress}
      style={[styles.dayButton, { backgroundColor: selected ? colors.tertiary : colors.tertiaryTint }]}
      testID="dayButton"
    >
      <StyledText font="bold" size="lg" style={{ color: selected ? colors.bg : colors.text }} testID="date">
        {date}
      </StyledText>
      <Space size={3} />
      <StyledText font="regular" size="xs" style={{ color: selected ? colors.bg : colors.text }} testID="day">
        {day}
      </StyledText>
    </Pressable>
  );
};

export default DayButton;

const styles = StyleSheet.create({
  dayButton: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
});
