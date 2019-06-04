import React from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import fontelloConfig from '../config.json';
import Colors from '../constants/Colors';

const Icon = createIconSetFromFontello(fontelloConfig);

const TabBarIcon = props => (
  <Icon
    name={props.name}
    size={26}
    style={{ marginBottom: -3 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;