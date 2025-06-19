/*import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice';
import postReducer from '../store/postSlice';
import analyticsReducer from '../store/analyticsSlice';

export const renderWithRedux = (
    ui: React.ReactElement,
    initialState: Partial<{ auth: any; posts: any; analytics: any }> = {}
) => {
    const store = configureStore({
        reducer: { auth: authReducer, posts: postReducer, analytics: analyticsReducer },
        preloadedState: initialState,
    });
    return render(<Provider store={store}>{ui}</Provider>, { store });
};*/