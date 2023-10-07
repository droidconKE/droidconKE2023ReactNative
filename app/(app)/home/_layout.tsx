import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import React from 'react';
import CogIcon from '../../../assets/artworks/CogIcon';
import HeaderRight from '../../../components/headers/HeaderRight';
import MainHeader from '../../../components/headers/MainHeader';

export default () => {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#ff6e4d',
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginTop: 4,
          marginBottom: 4,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home-sharp" size={24} color={focused ? colors.primary : color} />
          ),
          tabBarLabel: 'Home',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleAlign: 'left',
          headerTitle: () => <MainHeader />,
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="notifications-sharp" size={24} color={focused ? colors.primary : color} />
          ),
          tabBarLabel: 'Feed',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleAlign: 'left',
          headerTitle: () => <MainHeader />,
          headerRight: () => <HeaderRight handlePress={() => {}} />,
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="clockcircle" size={24} color={focused ? colors.primary : color} />
          ),
          tabBarLabel: 'Sessions',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleAlign: 'left',
          headerTitle: () => <MainHeader />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <CogIcon width={24} height={24} color={focused ? colors.primary : color} />
          ),
          tabBarLabel: 'About',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleAlign: 'left',
          headerTitle: () => <MainHeader />,
        }}
      />
    </Tabs>
  );
};
