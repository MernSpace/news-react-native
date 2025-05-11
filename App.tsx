
import Footer from 'components/footer';
import Header from 'components/header';
import Body from 'components/body';
import './global.css';

import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
  
    <Header/>
      <Footer/>
    </SafeAreaView>
  );
}
