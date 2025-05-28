import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ArcNodeProps {
  status: 'completed' | 'current' | 'locked';
  pulseAnim?: Animated.Value;
}

export default function ArcNode({ status, pulseAnim }: ArcNodeProps) {
  const getColors = () => {
    switch (status) {
      case 'completed':
        return ['#7A00F3', '#7A00F3'];
      case 'current':
        return ['#FF4E4E', '#FF4E4E'];
      default:
        return ['#5A5A5A', '#5A5A5A'];
    }
  };

  const scale = pulseAnim?.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  }) || 1;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.outerGlow, { transform: [{ scale }] }]}>
        <LinearGradient
          colors={getColors()}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.inner} />
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerGlow: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    padding: 2,
    borderRadius: 12,
  },
  inner: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    borderRadius: 10,
  },
});