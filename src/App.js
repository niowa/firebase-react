import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/messaging';

const key = 'key here';
const config = {
    // config here
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.usePublicVapidKey(key);

export default class App extends React.Component {
    componentDidMount() {

        messaging.getToken().then((currentToken) => {
            console.log(currentToken);
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });

        messaging.onTokenRefresh(() => {
            messaging.getToken().then((refreshedToken) => {
                console.log('Token refreshed.');
                // Indicate that the new Instance ID token has not yet been sent to the
                // app server.
                // setTokenSentToServer(false);
                // Send Instance ID token to app server.
                // sendTokenToServer(refreshedToken);
                // ...
            }).catch((err) => {
                console.log('Unable to retrieve refreshed token ', err);
                // showToken('Unable to retrieve refreshed token ', err);
            });
        });

        messaging.onMessage((payload) => {
            console.log('Message received. ', payload);
            // ...
        });

        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    }

    render() {
        return (
            <div>
                Trans
            </div>
        );
    }
}
