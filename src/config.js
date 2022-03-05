import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBMZNEicX-mD8PbUqW3o1wDn9j0TyDxsbA',
  authDomain: 'raydphoto-6f5cf.firebaseapp.com',
  projectId: 'raydphoto-6f5cf',
  storageBucket: 'raydphoto-6f5cf.appspot.com',
  messagingSenderId: '185913549764',
  appId: '1:185913549764:web:61e1d56ef295c3a64e7a91',
  measurementId: 'G-63PBPCV075',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
