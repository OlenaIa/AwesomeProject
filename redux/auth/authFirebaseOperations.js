import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from './config';


// const postUser = async (newUser, thunkAPI) => {
//     try {
//         const response = await axios.post('/users/signup', newUser);
//         setAuthHeader(response.data.token);
//         return response.data;
//     } catch (e) {
//         Notify.failure(`We're sorry, something went wrong`, options);
//         return thunkAPI.rejectWithValue(e.message);
//     }
// };
const registerDB = async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  const loginDB = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
		return credentials.user;
  } catch (error) {
    throw error;
  }
};

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

const updateUserProfile = async (update) => {

  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {

  // оновлюємо його профайл
		try {
			await updateProfile(user, update);
		} catch(error) {
			throw error
		}
  }
};
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});