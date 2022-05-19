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
  apiKey: 'AIzaSyCrlj7a69u-DF6kT5fmVrSdu-S0sVG20XU',
  authDomain: 'client-panel-c22a8.firebaseapp.com',
  projectId: 'client-panel-c22a8',
  storageBucket: 'client-panel-c22a8.appspot.com',
  messagingSenderId: '279304430008',
  appId: '1:279304430008:web:f5aa97daa860dbc1b9af4d',
  measurementId: 'G-JWQHTRXYC1',
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
