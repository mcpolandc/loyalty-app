import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/activity';
import RewardsScreen from '../screens/RewardsScreen';
import ProfileScreen from '../screens/ProfileScreen';
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
  Activity: ActivityScreen,
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
  Links: RewardsScreen,
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
  Settings: ProfileScreen,
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
