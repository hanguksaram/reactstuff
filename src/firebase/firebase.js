import * as firebase from 'firebase'
import expenses from '../tests/fixtures/expenses'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, database as default, googleAuthProvider}

// child_removed
//database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
//})
//child_changed
//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
//})
//child_added

//  database.ref('expenses').on('value', (snapshot) => {
    
//      const expenses = []
//      snapshot.forEach((expense) => {expenses.push({...expense.val(), id: expense.key})})
//      console.log(expenses)},
//      (e) => console.log('Error fetching data', e)
//  )





// database.ref('expenses').once('value')
//    .then((snapshot) => {
//        const expenses = []

//        snapshot.forEach((childSnapshot) => expenses.push(childSnapshot.val()))
//        console.log(expenses)

      

//    })




// database.ref('notes/-LFwjjBCOUFiq_M9bl-U').update({
//     body: 'Buy food'
// })
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Anngular, Python'
// })

// const firebaseNotes = {
//     notes: {
//         apoijasdf:{
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         kokoerbipw:{
//             title: 'Another note!',
//             body: 'This is my note'
//         }
//     }
// }

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {console.log('Error with data fetching', e)} )

// const getNameLocationSubscription = database.ref().on(
//     'value',
//      (snapshot) => {
//          const {name, location, job} = snapshot.val()
//          console.log(`${name} works as ${job} in ${location.city}`)},
//      (e) => {
//         console.log('Something went wrong', e)
//     })

// setTimeout(() => {    
// database.ref().update({
//     name: "Javaboy",
//     age: 26,
//     'location/city': 'SaintP'
// })
// }, 5000)
//database.ref().off(onValueChange);//remove subscription
// database.ref()
//     .once('value')
//     .then((snapshot) => console.log(snapshot.val()))
//     .catch((e) => console.log("Error fetching data", e))
//  database.ref().set({
//      name: 'Artur Pozhidaev',
//      age: 26,
//      isSingle: true,
//     location: {
//         city: 'Novosibirsk',
//          country: 'Russia'
//     }
   
//  }).then(() => console.log('data was saved'))
//  .catch((e) => console.log('this is failed', e))

 //only root object updating
// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software developer',
//     isSingle: null
// })

//to implement properly objject updating should use next syntax:
// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software developer',
//     'location/city': 'Boston'
// })
// database.ref('age').set(27)
// database.ref('location/city').set('Berdsk')
// database.ref('attributes').set({
    
//     height: 187,
//     weight: 80
    
// })
// database.ref().set(null)//equals
// database.ref('isSingle').remove()//equals
//   .then(() => { console.log('Data was removed')})
//   .catch((e) => {console.log('Did not remove data', e)})