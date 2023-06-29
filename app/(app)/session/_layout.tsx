import { useTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default () => {
  const { colors } = useTheme();

  return (
    <Stack>
      <Stack.Screen
        name="[session]"
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
    </Stack>
  );
};
