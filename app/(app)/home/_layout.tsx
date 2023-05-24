/* eslint-disable react/no-unstable-nested-components */
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import StyledText from '../../../components/common/StyledText';

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
          headerShadowVisible: false,
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
          headerShadowVisible: false,
          title: 'Feed',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="/feedback">
              <StyledText>feedback</StyledText>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="clockcircle" size={24} color={focused ? colors.primary : color} />
          ),
          tabBarLabel: 'Sessions',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="settings" size={24} color={focused ? colors.primary : color} />
          ),
          tabBarLabel: 'About',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
        }}
      />
    </Tabs>
  );
};
