import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ActivitySummaryBox from './activity-summary-box';
import ActivityList from './activity-list';

const ActivityScreen = (props) => (
  <ScrollView style={styles.container}>
    <ActivitySummaryBox />
    <ActivityList />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default ActivityScreen;