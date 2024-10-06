import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen4a from './components/Screen4a'
import Screen4b from './components/Screen4b'


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen4a')}>
        <Text style={styles.buttonText}>Màn Hình 4a</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen4b')}>
        <Text style={styles.buttonText}>Màn Hình 4b</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',  
    padding: 20,
  },
  button: {
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen4a" component={Screen4a} />
        <Stack.Screen name="Screen4b" component={Screen4b} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}