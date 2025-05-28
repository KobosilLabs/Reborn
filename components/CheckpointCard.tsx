import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CheckpointCard() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 78, 78, 0.15)', 'rgba(122, 0, 243, 0.15)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <Text style={styles.title}>CHOOSE YOUR PATH</Text>
        <View style={styles.separator} />
        <Text style={styles.subtitle}>SELECT YOUR NEXT CHALLENGE</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    marginLeft: 36,
  },
  card: {
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#FF4E4E',
  },
  title: {
    fontFamily: 'SpaceMono-Bold',
    fontSize: 24,
    color: '#FF4E4E',
    letterSpacing: 2,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255, 78, 78, 0.3)',
    marginVertical: 16,
  },
  subtitle: {
    fontFamily: 'SpaceMono-Regular',
    fontSize: 14,
    color: '#7A00F3',
    letterSpacing: 1,
    textAlign: 'center',
  },
});