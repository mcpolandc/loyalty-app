import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const Home = createStackNavigator({
  Home: HomeScreen,
});

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
    />
  ),
};

const Activity = createStackNavigator({
  Activity: LinksScreen,
});

Activity.navigationOptions = {
  tabBarLabel: 'Activity',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'piggy-bank'}
    />
  ),
};

const Rewards = createStackNavigator({
  Links: LinksScreen,
});

Rewards.navigationOptions = {
  tabBarLabel: 'Rewards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ 'trophy' }
    />
  ),
};

const Profile = createStackNavigator({
  Settings: SettingsScreen,
});

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'avatar'}
    />
  ),
};

export default createBottomTabNavigator({
  Home,
  Activity,
  Rewards,
  Profile,
});
