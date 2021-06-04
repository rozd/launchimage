import * as functions from 'firebase-functions';
import * as processing from 'modules/processing'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const image = functions.https.onRequest((req, res) => {
    if (req.method == "POST") {
        return
    }
});