import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// Screen width to calculate item width
const screenWidth = Dimensions.get('window').width;

const initialNewsPortals = [
  { id: '1', name: 'Prothom Alo', logo: require('../assets/prothom-alo.png'), selected: false },
  { id: '2', name: 'bdnews24', logo: require('../assets/bdnews.png'), selected: false },
  { id: '3', name: 'BBC Bangla', logo: require('../assets/bbc.jpg'), selected: false },
  { id: '4', name: 'Bangla News', logo: require('../assets/images.png'), selected: false },
  { id: '5', name: 'Noya Diganta', logo: require('../assets/songram.png'), selected: false },
  { id: '6', name: 'Samakal', logo: require('../assets/jago.jpg'), selected: false },
  { id: '7', name: 'Bonik Barta', logo: require('../assets/images.png'), selected: false },
  { id: '8', name: 'Amader Shomoy', logo: require('../assets/noya.png'), selected: false },
  { id: '9', name: 'Somokal', logo: require('../assets/prothom-alo.png'), selected: false },
  { id: '10', name: 'Ittefaq', logo: require('../assets/istockphoto-471235859-612x612.jpg'), selected: false },
  { id: '11', name: 'Jugantor', logo: require('../assets/adaptive-icon.png'), selected: false },
  { id: '12', name: 'Kaler Kantho', logo: require('../assets/icon.png'), selected: false },
  { id: '13', name: 'Daily Star', logo: require('../assets/favicon.png'), selected: false },
  { id: '14', name: 'Janakantha', logo: require('../assets/splash.png'), selected: false },
  { id: '15', name: 'Inqilab', logo: require('../assets/images.png'), selected: false },
  { id: '16', name: 'Manab Zamin', logo: require('../assets/bbc.jpg'), selected: false },
  { id: '17', name: 'Ittehad', logo: require('../assets/songram.png'), selected: false },
  { id: '18', name: 'Daily Observer', logo: require('../assets/jago.jpg'), selected: false },
  { id: '19', name: 'Ajker Patrika', logo: require('../assets/noya.png'), selected: false },
  { id: '20', name: 'Sangbad', logo: require('../assets/bdnews.png'), selected: false },
];


export default function NewsPortalSelector() {
  const [activeTab, setActiveTab] = useState('For You');
  const [newsPortals, setNewsPortals] = useState(initialNewsPortals);

  const changePortalIcon = (id, newLogo) => {
    setNewsPortals(newsPortals.map(portal =>
      portal.id === id ? { ...portal, logo: newLogo } : portal
    ));
  };

  const renderPortalItem = ({ item }) => {
    const exactItemWidth = (screenWidth - 32 - 16) / 3;

    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
          margin: 2.5,
          padding: 8,
          width: exactItemWidth,
          height: exactItemWidth * 0.85,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: item.selected ? 2 : 0,
          borderColor: item.selected ? '#10b981' : 'transparent',
        }}

        onLongPress={() => {
          const newLogo = Math.random() > 0.5
            ? { uri: 'https://via.placeholder.com/100/ff0000' }
            : { uri: 'https://via.placeholder.com/100/00ff00' };
          changePortalIcon(item.id, newLogo);
        }}
      >
        <Image
          source={item.logo || demoPlaceholderImage}
          style={{
            width: exactItemWidth * 0.75,
            height: exactItemWidth * 0.45,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Filters and Tabs */}
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity className="flex-row items-center mr-4 justify-center bg-gray-100 rounded-full px-3 py-1.5 text-center">
          <View className=" justify-center items-center">
            <Icon name="filter" size={20} color="#333" />
          </View>
          <Text className="text-gray-700 font-medium mr-1">Filters</Text>

        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {['For You', 'World', 'Tech'].map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`px-4 py-1.5 rounded-full mr-2 ${activeTab === tab ? 'bg-green-100' : 'bg-transparent'}`}
              onPress={() => setActiveTab(tab)}
            >
              <Text className={`${activeTab === tab ? 'text-green-600' : 'text-gray-600'} font-medium`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* News Portal Grid */}
      <View className="flex-1 px-4 mt-2 pb-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold text-gray-800">Select News Portal</Text>
          <TouchableOpacity>
            <Text className="text-green-600 font-medium">See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={newsPortals}
          renderItem={renderPortalItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-start',
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
          style={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  );
}
