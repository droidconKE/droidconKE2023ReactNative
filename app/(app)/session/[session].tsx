import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';

// TODO: Session page
/**
 * - should show details of the event session: speaker name, title of session, description, level, speaker's twitter handle, and a floating action button to share the session info
 */
// TODO: Use real data from mock/sessions.ts

const Session = () => {
  const { colors } = useTheme();
  const { slug } = useSearchParams();
  const router = useRouter();

  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          title: `Session ${slug}`,
          headerTitleAlign: 'center',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerLeft: () => <AntDesign name="arrowleft" size={24} color={colors.text} onPress={() => router.back()} />,
        }}
      />

      <View style={styles.main}>
        <StyledText>session slug: {slug}</StyledText>
      </View>
    </MainContainer>
  );
};

export default Session;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
