import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Colors from '../../constants/Colors';

import {
    activityList
} from './constants';

const ActivityList = props => {
    const activities = activityList.map((ac, i) => (
        <View key={`${ac.title}-${i}`} style={styles.activityContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{ac.title}</Text>
                <Text style={styles.pointsText}>{ac.pointsEarned} points</Text>
            </View>
            <Text>{ac.date}</Text>
        </View>
    ));

    return (
        <View style={styles.container}>
            {activities}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    },
    activityContainer: {
        marginBottom: 20
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    pointsText: {
        color: Colors.appGreen
    }
});

export default ActivityList;