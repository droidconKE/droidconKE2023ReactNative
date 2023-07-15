import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderActionRight from '../../../components/headers/HeaderActionRight';
import FilterModal from '../../../components/modals/FilterModal';

// TODO: ALL Sessions page

/**
 * -  implement a List that displays all sessions
 * - list should either be collapsible or not
 * - Session card component should be either the small card that displays time, title, description, venue and a favorite icon button
 * - session card can also be a full card as seen in the home page, with image and speaker avatars too
 * - consider reusing the session card component from the home page
 */

// TODO: this is dummy data, replace with real data from mock/sessions.ts
const _sessions = [
  {
    id: '1',
    title: 'React Native',
    description:
      'React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.',
    speaker: '1',
    slug: 'react-native',
  },
  {
    id: '2',
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    speaker: '2',
    slug: 'react',
  },
];

const Sessions = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  const router = useRouter();

  const showFilterModal = () => {
    setFilterModalVisible(true);
  };

  const handleFilter = () => {
    // TODO: handle filter sessions here
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          headerRight: () => (
            <HeaderActionRight collapsed={collapsed} onCollapse={handleCollapse} handlePress={showFilterModal} />
          ),
        }}
      />

      <View style={styles.main}>
        <StyledText>sessions</StyledText>

        {_sessions.map((session) => (
          <StyledText
            key={session.id}
            onPress={() => router.push({ pathname: `/session/${session.slug}`, params: { slug: session.slug } })}
          >
            {session.title}
          </StyledText>
        ))}
      </View>

      <View>
        <FilterModal
          visible={filterModalVisible}
          onClose={() => setFilterModalVisible(false)}
          onFilter={handleFilter}
        />
      </View>
    </MainContainer>
  );
};

export default Sessions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
