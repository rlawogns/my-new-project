import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CityList from './CityList';

const HomeScreen = () => (
  <View style={styles.container}>
    <CityList/>
    <StatusBar style="auto" />
  </View>
);


export default class App extends React.Component {

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Cities' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}