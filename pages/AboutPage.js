import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function AboutPage({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>
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
