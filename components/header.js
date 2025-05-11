import React from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchHeader({ onBackPress, onSearch }) {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        
        {/* Back Arrow */}
        <TouchableOpacity onPress={onBackPress} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#333333" />
        </TouchableOpacity>

        {/* Search Input */}
        <View className="flex-1 flex-row items-center bg-gray-100 rounded-full px-3 h-10">
          <Ionicons name="search" size={18} color="#777777" />
          <TextInput
            className="flex-1 h-10 ml-2 text-[15px] py-2 text-gray-800"
            placeholder="Enter Name or Number"
            placeholderTextColor="#999999"
            returnKeyType="search"
            onChangeText={onSearch}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
