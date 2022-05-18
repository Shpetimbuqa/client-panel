import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from 'redux'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'

//Reducers
// @todo

const firebaseConfig = {
  apiKey: 'AIzaSyDt5Kt9WMDmWOD5jjz6MgoV0ny3_rh0Z5o',
  authDomain: 'clientpanel-97ece.firebaseapp.com',
  projectId: 'clientpanel-97ece',
  storageBucket: 'clientpanel-97ece.appspot.com',
  messagingSenderId: '607621917889',
  appId: '1:607621917889:web:89e4a909ab9c51c3157840',
  measurementId: 'G-68BDGEC2GZ',
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

// Init firebase instance
firebase.initializeApp(firebaseConfig)
// Init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

// Create initial state
const initialState = {}

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
