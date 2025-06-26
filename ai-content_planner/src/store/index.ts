import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users, posts, analytics } from '@/data/mockData';

// Types
interface User {
    id: number;
    email: string;
    name: string;
    password: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    scheduledDate: string;
    platform: string;
}

interface Analytics {
    postId: number;
    views: number;
    likes: number;
    shares: number;
}

interface AuthState {
    users: User[];
    currentUser: User | null;
}

interface PostsState {
    posts: Post[];
}

interface AnalyticsState {
    analytics: Analytics[];
}

// Auth Slice (In-memory with optional localStorage persistence)
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users,
        currentUser: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null,
    } as AuthState,
    reducers: {
        login(state, action: PayloadAction<{ email: string; password: string }>) {
            const user = state.users.find(
                (u) => u.email === action.payload.email && u.password === action.payload.password
            );
            if (user) {
                state.currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        },
        signup(state, action: PayloadAction<User>) {
            const newUser = { ...action.payload, id: state.users.length + 1 };
            state.users.push(newUser);
            state.currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(newUser));
        },
        logout(state) {
            state.currentUser = null;
            localStorage.removeItem('currentUser');
        },
    },
});

// Posts Slice (In-memory storage, resets on refresh)
const postsSlice = createSlice({
    name: 'posts',
    initialState: { posts } as PostsState,
    reducers: {
        addPost(state, action: PayloadAction<Omit<Post, 'id'>>) {
            const newPost: Post = {
                id: state.posts.length + 1,
                ...action.payload,
            };
            state.posts.push(newPost);
        },
        updatePost(state, action: PayloadAction<Partial<Post> & { id: number }>) {
            const post = state.posts.find((p) => p.id === action.payload.id);
            if (post) {
                Object.assign(post, action.payload);
            }
        },
    },
});

// Analytics Slice (In-memory storage, resets on refresh)
const analyticsSlice = createSlice({
    name: 'analytics',
    initialState: { analytics } as AnalyticsState,
    reducers: {
        addAnalytics(state, action: PayloadAction<Omit<Analytics, 'postId'> & { postId: number }>) {
            state.analytics.push({ ...action.payload });
        },
        updateAnalytics(state, action: PayloadAction<Partial<Analytics> & { postId: number }>) {
            const analytic = state.analytics.find((a) => a.postId === action.payload.postId);
            if (analytic) {
                Object.assign(analytic, action.payload);
            }
        },
    },
});

// Configure Store
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        posts: postsSlice.reducer,
        analytics: analyticsSlice.reducer,
    },
});

// Export Actions
export const { login, signup, logout } = authSlice.actions;
export const { addPost, updatePost } = postsSlice.actions;
export const { addAnalytics, updateAnalytics } = analyticsSlice.actions;

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;