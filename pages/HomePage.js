import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomePage({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View>

				<Button
					title="Go About Page"
					onPress={() => navigation.navigate("About")} />
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: '#fff',
		backgroundColor: 'black',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
