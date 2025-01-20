import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomePage({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<Icon name="menu" size={25} color="red" style={{ marginLeft: 15 }} />
				</TouchableOpacity>
			),
			headerRight: () => (
				<TouchableOpacity onPress={() => alert('Search button pressed')}>
					<Icon name="search" size={25} color="red" style={{ marginRight: 15 }} />
				</TouchableOpacity>
			),
			headerTitle: 'Home2',
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTintColor: 'red',
		});
	}, [navigation]);


	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={{ color: '#fff', textAlign: "center" }}>I am the Home Page</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});