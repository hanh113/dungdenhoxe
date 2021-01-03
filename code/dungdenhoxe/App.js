/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import MapView,  { Marker } from 'react-native-maps';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
         <View>
<Text>VKL12</Text>
      <MapView
          initialRegion={{
            latitude: 20.9996,
            longitude: 105.840,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style = {styles.map}
         showsUserLocation = {true}
         followUserLocation = {true}
         zoomEnabled = {true}>
         <Marker
            coordinate={{latitude: 20.9996,
            longitude: 105.840}}
            title={"title"}
            description={"description"}
         />
      </MapView>
   </View>
    </>
  );
};

const styles = StyleSheet.create({
     map: {
        height: 400,
      //  marginTop: 80
      // flex:1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
   }
});

export default App;
