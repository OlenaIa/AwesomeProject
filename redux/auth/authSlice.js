import persistReducer from "redux-persist/es/persistReducer";
import { postUserThunk, postLogInThunk, postLogOutThunk, getCurrentUserThunk } from "services/fetchAuth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const authInitialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    avatar: null,
    error: null,
    isCurrentUser: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        filterSet(state, { payload }) {
            return action.payload;
        }
    }
});

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export const authPersistReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);