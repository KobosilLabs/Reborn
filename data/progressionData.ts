import { ImageSourcePropType } from 'react-native';

export interface Arc {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isCheckpoint?: boolean;
  status: 'completed' | 'current' | 'locked';
}

export const progressionData: Arc[] = [
  {
    id: 'arc-9',
    name: 'ASCENSION',
    description: 'Transcend your limits',
    imageUrl: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
    status: 'locked',
  },
  {
    id: 'arc-8',
    name: 'DIVINE BLADE',
    description: 'Master the art of precision',
    imageUrl: 'https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg',
    status: 'locked',
  },
  {
    id: 'arc-7',
    name: 'SHADOW RISING',
    description: 'Embrace the darkness within',
    imageUrl: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
    isCheckpoint: true,
    status: 'locked',
  },
  {
    id: 'arc-6',
    name: 'SILENT RESOLVE',
    description: 'Find strength in stillness',
    imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
    status: 'locked',
  },
  {
    id: 'arc-5',
    name: 'STORM BREAKER',
    description: 'Weather any challenge',
    imageUrl: 'https://images.pexels.com/photos/2531904/pexels-photo-2531904.jpeg',
    status: 'locked',
  },
  {
    id: 'arc-4',
    name: 'BEAST MODE',
    description: 'Unleash your inner strength',
    imageUrl: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg',
    isCheckpoint: true,
    status: 'current',
  },
  {
    id: 'arc-3',
    name: 'IRON WILL',
    description: 'Forge unbreakable determination',
    imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    status: 'completed',
  },
  {
    id: 'arc-2',
    name: 'MIND TEMPEST',
    description: 'Master the chaos within',
    imageUrl: 'https://images.pexels.com/photos/1553659/pexels-photo-1553659.jpeg',
    status: 'completed',
  },
  {
    id: 'arc-1',
    name: 'REDEMPTION',
    description: 'Begin your journey',
    imageUrl: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
    isCheckpoint: true,
    status: 'completed',
  },
];