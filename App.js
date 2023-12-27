import React from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from "./src/view/home/index.js";
import Example from "./src/view/example/index.js";

export default function App() {
  console.disableYellowBox = true;
  return <SafeAreaProvider>
    <NavigationContainer>
      <ScreenList />
    </NavigationContainer>
  </SafeAreaProvider>
}

function ScreenList() {
  global.EdgeInsets = useSafeAreaInsets();
  const { Navigator, Screen } = createStackNavigator();
  return <Navigator initialPage={Home} headerMode='none'>
    <Screen name='Home' component={Home} />
    <Screen name='Example' component={Example} options={{ animationEnabled: false }} />
  </Navigator>;
}
