import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import KehadiranScreen from './screens/KehadiranScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Beranda' }} />
        <Stack.Screen name="Kehadiran" component={KehadiranScreen} options={{ title: 'Absensi Guru' }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Riwayat Absensi' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

