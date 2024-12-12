import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Circle, Marker, Polyline } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const carImage = require('../assets/images/caricon2.png')

export default function index() {

    const [origin, setOrigin] = useState(
        {
            latitude:-12.046246359578976, 
            longitude: -77.03047788903467,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }
    );

    const [destination, setDestination] = useState(
        {
            latitude:-12.04802357167657, 
            longitude: -77.03272859211398,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }
    );

  return (
    <View style = {styles.container}>
      <MapView 
      style = {{with:'100%', height: '100%'}}
      initialRegion={origin} 
      >
        <Marker
        coordinate={origin}
        pinColor='green'
        draggable={true}
        image={carImage}
        >
            <Callout>
                <Text>ESTO ES UN CALLOUT</Text>
            </Callout>
        </Marker>

        <Marker
        coordinate={destination}
        pinColor='green'
        draggable={true}
        image={carImage}
        >
            <Callout>
                <Text>ESTO ES UN CALLOUT</Text>
            </Callout>
        </Marker>

        {/*<Circle 
        center={origin}
        radius={100}
        />

       <Circle 
        center={destination}
        radius={100}
        />

        <Polyline
        coordinates={[origin,destination]}
        strokeColor='purple'
        strokeWidth={10}
        />
 */}
        <MapViewDirections
        origin={origin}
        destination={destination}
        apikey='AIzaSyDP7IJ7AYcokgC-HeGvd6cvJ6sbYU4xK1o'
        strokeColor='red'
        strokeWidth={10} 
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({})