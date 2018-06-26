import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
