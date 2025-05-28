import React from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { Arc } from '@/data/progressionData';
import ArcNode from './ArcNode';

interface ArcCardProps {
  arc: Arc;
  isLast?: boolean;
  pulseAnim?: Animated.Value;
}

export default function ArcCard({ arc, isLast, pulseAnim }: ArcCardProps) {
  const getGradientColors = () => {
    switch (arc.status) {
      case 'completed':
        return ['rgba(122, 0, 243, 0.1)', 'rgba(122, 0, 243, 0.05)'];
      case 'current':
        return ['rgba(255, 78, 78, 0.1)', 'rgba(255, 78, 78, 0.05)'];
      default:
        return ['rgba(90, 90, 90, 0.1)', 'rgba(90, 90, 90, 0.05)'];
    }
  };

  const getBorderColor = () => {
    switch (arc.status) {
      case 'completed':
        return '#7A00F3';
      case 'current':
        return '#FF4E4E';
      default:
        return '#5A5A5A';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.nodeContainer}>
        <ArcNode status={arc.status} pulseAnim={pulseAnim} />
        {!isLast && (
          <View style={[styles.line, { backgroundColor: getBorderColor() }]} />
        )}
      </View>
      
      <LinearGradient
        colors={getGradientColors()}
        style={[styles.card, { borderColor: getBorderColor() }]}
      >
        <View style={styles.content}>
          <View style={styles.textContent}>
            <Text style={styles.name}>{arc.name}</Text>
            <Text style={styles.description}>{arc.description}</Text>
          </View>
          <Image 
            source={{ uri: arc.imageUrl }}
            style={styles.image}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  nodeContainer: {
    alignItems: 'center',
    marginRight: 12,
  },
  line: {
    width: 2,
    height: 140,
    marginTop: 8,
    opacity: 0.3,
  },
  card: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    padding: 16,
  },
  textContent: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    color: '#DCDCDC',
    marginBottom: 8,
    letterSpacing: 1,
  },
  description: {
    fontFamily: 'SpaceMono-Regular',
    fontSize: 14,
    color: '#5A5A5A',
    letterSpacing: 0.5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});