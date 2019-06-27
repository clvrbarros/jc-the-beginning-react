const firebase = require('firebase');
require('firebase/functions');
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqgdUqOoZfgFD67_03hiye_b1LcyoFnGg",
    authDomain: "jc-the-beginning.firebaseapp.com",
    databaseURL: "https://jc-the-beginning.firebaseio.com",
    projectId: "jc-the-beginning",
    storageBucket: "jc-the-beginning.appspot.com",
    messagingSenderId: "225122661474",
    appId: "1:225122661474:web:f74e0cdd2bf3f6fe"
};

firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();

//db = (collection) => firebase.firestore().collection(collection);

const functions = firebase.functions();
const teste = functions.httpsCallable("sum");

teste({
    number1:'1',
    number2:2,
})
.then(function(result) {
    result = JSON.stringify(result);
    console.log(result['data']);
})
.catch(function(err) {
    console.log("Inside teste error: " + err);
});

//exports.teste;

// export default functions;
//export default db;


//** */add ao banco com key
    // db('users').add({
    //   name: 'Clever2222',
    //   country: 'Japan',
    // }).then(ref => {
    //   console.log('Added document with ID: ', ref.id);
    // })

    //** */add ao banco com nome
    // db.doc("KEYMANUEL").set({
    //   name: 'Fds',
    //   country : 'Carai',
    // }).then(ref => {
    //   console.log(ref.id);
    // })

    //**update
    // db.doc("KEYMANUEL").update({name: 'caguei'});

    //remove
    //db.doc("KEYMANUEL").delete();