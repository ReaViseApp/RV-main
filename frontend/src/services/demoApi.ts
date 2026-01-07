// Demo API service that uses mock data instead of real backend
import { mockUsers, mockPosts, getMockUser, getMockPosts, getMockPostById } from './mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const demoApi = {
  // User endpoints
  async getUser(id: string) {
    await delay(300); // Simulate network delay
    const user = getMockUser(id);
    if (!user) throw new Error('User not found');
    return { data: user };
  },

  async getCurrentUser() {
    await delay(300);
    return { data: mockUsers[0] }; // Return first user as "current user"
  },

  async getUsers() {
    await delay(300);
    return { data: mockUsers };
  },

  // Post endpoints
  async getPosts(category?: string) {
    await delay(500);
    return { data: getMockPosts(category) };
  },

  async getPost(id: string) {
    await delay(300);
    const post = getMockPostById(id);
    if (!post) throw new Error('Post not found');
    return { data: post };
  },

  async createPost(postData: any) {
    await delay(500);
    const newPost = {
      id: String(mockPosts.length + 1),
      userId: '1',
      username: 'creative_designer',
      ...postData,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
    };
    return { data: newPost };
  },

  async likePost(id: string) {
    await delay(300);
    return { data: { success: true, likes: Math.floor(Math.random() * 1000) } };
  },

  // Comment endpoints
  async getComments(postId: string) {
    await delay(300);
    return {
      data: [
        {
          id: '1',
          postId,
          userId: '2',
          username: 'art_collector',
          content: 'This looks amazing! Great work!',
          createdAt: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: '2',
          postId,
          userId: '3',
          username: 'nft_artist',
          content: 'Love the creativity here. Inspiring!',
          createdAt: new Date(Date.now() - 7200000).toISOString(),
        },
      ],
    };
  },

  async addComment(postId: string, content: string) {
    await delay(500);
    return {
      data: {
        id: String(Date.now()),
        postId,
        userId: '1',
        username: 'creative_designer',
        content,
        createdAt: new Date().toISOString(),
      },
    };
  },

  // Message endpoints
  async getConversations() {
    await delay(300);
    return {
      data: [
        {
          id: '1',
          userId: '2',
          username: 'art_collector',
          avatar: 'https://i.pravatar.cc/150?img=2',
          lastMessage: 'Hey, I love your design work!',
          timestamp: new Date(Date.now() - 1800000).toISOString(),
          unread: 2,
        },
      ],
    };
  },

  async getMessages(conversationId: string) {
    await delay(300);
    return {
      data: [
        {
          id: '1',
          senderId: '2',
          content: 'Hey, I love your design work!',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: '2',
          senderId: '1',
          content: 'Thank you! Glad you appreciate it.',
          timestamp: new Date(Date.now() - 1800000).toISOString(),
        },
      ],
    };
  },

  // Search endpoint
  async search(query: string) {
    await delay(400);
    const filteredPosts = mockPosts.filter(post =>
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    return { data: filteredPosts };
  },
};

export default demoApi;
