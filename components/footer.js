import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import NewsPortalSelector from './body'

const Screen1 = () => {
  return (
    <View style={styles.screen1}>
      <NewsPortalSelector/>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={styles.screen2}>
      {/* Clean content area - no titles */}
      
    </View>
  );
};

const Screen3 = () => {
  return (
    <View style={styles.screen2}>
      {/* Clean content area - no titles */}
    </View>
  );
};

const Screen4 = () => {
  return (
    <View style={styles.screen2}>
      {/* Clean content area - no titles */}
    </View>
  );
};

export default function Footer() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'home':
        icon = 'home';
        break;
      case 'stats':
        icon = 'chart-bar';
        break;
      case 'notifications':
        icon = 'bell-outline';
        break;
      case 'settings':
        icon = 'cog-outline';
        break;
    }

    return (
      <Icon
        name={icon}
        size={24}
        color={routeName === selectedTab ? '#00A651' : '#999'}
      />
    );
  };
  
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shadow}
        height={60}
        circleWidth={55}
        bgColor="white"
        initialRouteName="home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Center Action')}
            >
              <Icon name="focus-field-horizontal" color="white" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="home"
          position="LEFT"
          component={() => <Screen1 />}
          options={{ headerShown: false }}
        />
        <CurvedBottomBarExpo.Screen
          name="stats"
          position="LEFT"
          component={() => <Screen2 />}
          options={{ headerShown: false }}
        />
        <CurvedBottomBarExpo.Screen
          name="notifications"
          component={() => <Screen3 />}
          position="RIGHT"
          options={{ headerShown: false }}
        />
        <CurvedBottomBarExpo.Screen
          name="settings"
          component={() => <Screen4 />}
          position="RIGHT"
          options={{ headerShown: false }}
        />
      </CurvedBottomBarExpo.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  btnCircleUp: {
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A651',
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen1: {
    flex:1
  },
  screen2: {
    flex: 1,
    backgroundColor: 'white',
  },
});