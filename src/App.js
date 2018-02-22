import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount() {
    // Hook
    firebase.initializeApp({
      // Initialize Firebase
      apiKey: 'AIzaSyAq9-GuJVQCkzQR3vnWfM3h6deMlvNBmow',
      authDomain: 'atafsauth.firebaseapp.com',
      databaseURL: 'https://atafsauth.firebaseio.com',
      projectId: 'atafsauth',
      storageBucket: 'atafsauth.appspot.com',
      messagingSenderId: '870714038809'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App
