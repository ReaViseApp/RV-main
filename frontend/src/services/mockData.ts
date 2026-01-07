// Mock data for demo mode
export interface MockUser {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  followers: number;
  following: number;
}

export interface MockPost {
  id: string;
  userId: string;
  username: string;
  content: string;
  images: string[];
  category: 'TheLot' | 'Design' | 'ReaVise';
  likes: number;
  comments: number;
  createdAt: string;
  tags: string[];
}

export const mockUsers: MockUser[] = [
  {
    id: '1',
    username: 'creative_designer',
    email: 'designer@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Passionate designer creating unique NFT art',
    followers: 1234,
    following: 567,
  },
  {
    id: '2',
    username: 'art_collector',
    email: 'collector@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    bio: 'Collecting and curating digital masterpieces',
    followers: 890,
    following: 432,
  },
  {
    id: '3',
    username: 'nft_artist',
    email: 'artist@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Creating blockchain-verified digital art',
    followers: 2341,
    following: 123,
  },
];

export const mockPosts: MockPost[] = [
  {
    id: '1',
    userId: '1',
    username: 'creative_designer',
    content: 'Just finished this amazing custom design! Looking for feedback from the community. #DesignInspiration #CreativeWork',
    images: ['https://picsum.photos/seed/design1/800/600'],
    category: 'Design',
    likes: 342,
    comments: 28,
    createdAt: '2026-01-07T10:30:00Z',
    tags: ['DesignInspiration', 'CreativeWork'],
  },
  {
    id: '2',
    userId: '2',
    username: 'art_collector',
    content: 'Found this vintage item that needs a creative makeover. Any design ideas? #TheLot #UpcycleArt',
    images: ['https://picsum.photos/seed/lot1/800/600'],
    category: 'TheLot',
    likes: 156,
    comments: 42,
    createdAt: '2026-01-06T15:45:00Z',
    tags: ['TheLot', 'UpcycleArt'],
  },
  {
    id: '3',
    userId: '3',
    username: 'nft_artist',
    content: 'My latest NFT collection is live! Featuring abstract digital art with blockchain verification. #NFT #DigitalArt',
    images: ['https://picsum.photos/seed/nft1/800/600'],
    category: 'Design',
    likes: 789,
    comments: 134,
    createdAt: '2026-01-05T09:20:00Z',
    tags: ['NFT', 'DigitalArt'],
  },
  {
    id: '4',
    userId: '1',
    username: 'creative_designer',
    content: 'Completed project review - client loved the final design! Here\'s the before and after. #ReaVise #CompletedWork',
    images: ['https://picsum.photos/seed/completed1/800/600', 'https://picsum.photos/seed/completed2/800/600'],
    category: 'ReaVise',
    likes: 523,
    comments: 67,
    createdAt: '2026-01-04T14:10:00Z',
    tags: ['ReaVise', 'CompletedWork'],
  },
  {
    id: '5',
    userId: '2',
    username: 'art_collector',
    content: 'Showcasing my latest acquisition - a beautifully restored vintage piece with modern touches. #ReaVise #VintageModern',
    images: ['https://picsum.photos/seed/restored1/800/600'],
    category: 'ReaVise',
    likes: 445,
    comments: 53,
    createdAt: '2026-01-03T11:30:00Z',
    tags: ['ReaVise', 'VintageModern'],
  },
  {
    id: '6',
    userId: '3',
    username: 'nft_artist',
    content: 'New design concept for an interactive NFT experience. What do you think? #Design #InteractiveArt',
    images: ['https://picsum.photos/seed/concept1/800/600'],
    category: 'Design',
    likes: 612,
    comments: 89,
    createdAt: '2026-01-02T16:45:00Z',
    tags: ['Design', 'InteractiveArt'],
  },
];

export const getMockUser = (id: string): MockUser | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getMockPosts = (category?: string): MockPost[] => {
  if (category) {
    return mockPosts.filter(post => post.category === category);
  }
  return mockPosts;
};

export const getMockPostById = (id: string): MockPost | undefined => {
  return mockPosts.find(post => post.id === id);
};
