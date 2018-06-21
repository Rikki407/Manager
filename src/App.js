import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBxYZaHWPPcB4jYMC69Zmcy6mMA3PiHfL0',
            authDomain: 'manager-6aeb0.firebaseapp.com',
            databaseURL: 'https://manager-6aeb0.firebaseio.com',
            projectId: 'manager-6aeb0',
            storageBucket: 'manager-6aeb0.appspot.com',
            messagingSenderId: '498161393779'
          };
          firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
