import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';

const HomeScreen = (props) => (
  <View style={styles.container}>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsTitle}>Loyalty Balance</Text>
        <Text style={styles.pointsNumber}>1000pts</Text>
        <Text style={styles.pointsMessage}>500 points until your next reward</Text>
      </View>
      <Text style={styles.checkoutMessage}>Scan at checkout</Text>
      <View style={styles.checkoutQRContainer}>
        <Image
          source={require('../assets/images/checkout-qr-code.png')}
          style={styles.checkoutQRLeft}
        />
        <View style={styles.checkoutQRRight}>
          <Text style={styles.checkoutQRRightTitle}>Checkout QR</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
      </View>
      <View style={styles.rewardsContainer}>
        <Text style={styles.rewardsTitle}>View Rewards</Text>
        <Text styles={styles.rewardsMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <TouchableOpacity
          style={styles.rewardsButton}
          onPress={() => props.navigation.navigate('Rewards')}
        >
          <Text style={styles.rewardsButtonText}>Rewards</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

const homeScreenElement = {
  marginLeft: 20,
  marginRight: 20,
  marginTop: 30,
};

const homeScreenContainer = {
  ...homeScreenElement,
  borderRadius: 4,
  shadowOffset:{
    width: 5,
    height: 5
  },
  shadowColor: 'grey',
  shadowOpacity: 0.5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30
  },
  pointsContainer: {
    ...homeScreenContainer,
    paddingLeft: 25,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 25,
    backgroundColor: Colors.pointsContainerBackground,
  },
  pointsTitle: {
    fontSize: 25,
    color: Colors.pointsTitleColor
  },
  pointsNumber: {
    fontSize: 100,
    color: Colors.pointsNumberColor,
    fontWeight: 'bold'
  },
  pointsMessage: {
    color: Colors.pointsMessageColor
  },
  checkoutMessage: {
    ...homeScreenElement,
    color: Colors.checkoutMessageColor,
    fontSize: 25,
    fontWeight: 'bold'
  },
  checkoutQRContainer: {
    ...homeScreenContainer,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1
  },
  checkoutQRLeft: {
    width: 150,
    height: 150
  },
  checkoutQRRight: {
    paddingTop: 30,
    paddingLeft: 20
  },
  checkoutQRRightTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  checkoutQRRightMessage: {
    flexWrap: 'wrap'
  },
  rewardsContainer: {
    ...homeScreenContainer,
    paddingLeft: 25,
    paddingBottom: 30,
    paddingTop: 30,
    paddingRight: 25,
    borderWidth: 1
  },
  rewardsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rewardsMessage: {
    marginTop: 20
  },
  rewardsButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 4,
    backgroundColor: Colors.primaryButton,
  },
  rewardsButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default HomeScreen;