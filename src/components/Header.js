// This is a great example of a Functional Component!!!

import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

const Header = (props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{props.headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    ...Platform.select({
      ios: {
        height: 90,
        paddingTop: 35,
      },
      android: {
        height: 60,
        paddingTop: 15,
      },
    }),
  },
  headerTitle: {
    fontSize: 20,
  },
});

export default Header;
