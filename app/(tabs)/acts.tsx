import React, { useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import { progressionData } from '@/data/progressionData';
import ArcCard from '@/components/ArcCard';
import CheckpointCard from '@/components/CheckpointCard';

export default function ActsScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => pulse());
    };

    pulse();
  }, []);

  useEffect(() => {
    // Find the current arc index
    const currentIndex = progressionData.findIndex(arc => arc.status === 'current');
    if (currentIndex !== -1) {
      // Calculate scroll position (approximate)
      const scrollPosition = currentIndex * 200; // Adjust based on actual card height
      
      // Scroll to position with animation
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          y: scrollPosition,
          animated: true,
        });
      }, 500);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ACTS</Text>
        <Text style={styles.headerSubtitle}>YOUR JOURNEY</Text>
      </View>
      
      <ScrollView 
        ref={scrollViewRef}
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.progressionContainer}>
          {progressionData.map((arc, index) => (
            <React.Fragment key={arc.id}>
              <ArcCard 
                arc={arc}
                isLast={index === progressionData.length - 1}
                pulseAnim={arc.status === 'current' ? pulseAnim : undefined}
              />
              {arc.isCheckpoint && <CheckpointCard />}
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#5A5A5A',
  },
  headerTitle: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 32,
    color: '#DCDCDC',
    letterSpacing: 2,
  },
  headerSubtitle: {
    fontFamily: 'SpaceMono-Regular',
    fontSize: 14,
    color: '#FF4E4E',
    letterSpacing: 1,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  progressionContainer: {
    padding: 20,
    paddingBottom: 40,
  },
});