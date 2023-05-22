/* eslint-disable react/no-unstable-nested-components */
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import React from 'react';

export default () => {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#ff6e4d',
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIconStyle: {
          marginTop: 6,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home-sharp" size={26} color={focused ? '#000CEB' : color} />
          ),
          tabBarLabel: 'Home',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="notifications-sharp" size={26} color={focused ? '#000CEB' : color} />
          ),
          tabBarLabel: 'Feed',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="clockcircle" size={26} color={focused ? '#000CEB' : color} />
          ),
          tabBarLabel: 'Sessions',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="settings" size={26} color={focused ? '#000CEB' : color} />
          ),
          tabBarLabel: 'About',
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
        }}
      />
    </Tabs>
  );
};
