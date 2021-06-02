import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// after `expo install react-native-safe-area-context`.
import { SafeAreaView } from 'react-native-safe-area-context';
export default class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        cities: [],
      };
    }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/rlawogns/realcoding_App/main/CityName/availableCityNames')
      .then(response => response.json())
      .then(cities => {
              console.log('cities =', cities.length);
              this.setState({
                cities
              });
            });
  }
  renderItem(city) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{city}</Text>
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.container}
          keyExtractor={item => item}
          renderItem={({ item }) => this.renderItem(item)}
          data={this.state.cities}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});