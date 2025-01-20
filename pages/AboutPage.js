import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AboutPage({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => alert('Search button pressed')}>
					<Icon name="add" size={25} color="red" style={{ marginRight: 15 }} />
				</TouchableOpacity>
			),
			headerTitle: 'About',
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTintColor: 'red',
		});
	}, [navigation]);
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={{ color: "#fff" }}>
					I'm the About Page
				</Text>
				<StatusBar style="auto" />
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
