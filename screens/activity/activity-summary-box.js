import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Colors from '../../constants/Colors';

import {
    activitySummaryBoxTitle,
    activitySummaryBoxSummary
} from './constants';

const ActivitySummaryBox = props => (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>{activitySummaryBoxTitle}</Text>
            <View style={styles.pointsBox}>
                <Text style={styles.pointsText}>1000 points</Text>
            </View>
        </View>
        <Text>{activitySummaryBoxSummary}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        borderRadius: 4,
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        padding: 20
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40
    },
    pointsBox: {
        backgroundColor: Colors.appLightGreen,
        borderRadius: 4,
        padding: 10
    },
    pointsText: {
        color: Colors.appGreen
    }
});

export default ActivitySummaryBox;