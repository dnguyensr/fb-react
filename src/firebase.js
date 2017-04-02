import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC5IH4sz3-DW-xObPxOSfolp9amSa5Ps0A',
  authDomain: 'sundryega-84994.firebaseapp.com',
  databaseURL: 'https://sundryega-84994.firebaseio.com',
  projectId: 'sundryega-84994',
  storageBucket: 'sundryega-84994.appspot.com',
  messagingSenderId: '790639719657'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()