import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';

export default function Profile({ navigation }) {

	return (
		<SafeAreaView style={styles.container}>

			<View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
				<Button title="Save" onPress={() => navigation.navigate("Home")} />
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		padding: 10,
	},
	image: {
		width: '100%',
		borderRadius: 24, // ios only effect on image 😂
		overflow: 'hidden',
		height: undefined,
		aspectRatio: 1, // This ensures the image maintains its aspect ratio
	},
});
