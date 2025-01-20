
import React, { useLayoutEffect } from 'react';
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import mediaVideo from "../assets/demo.mp4";

const mediaSource = mediaVideo;

const videoSource =
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => alert('Search button pressed')}>
					<Icon name="add" size={25} color="red" style={{ marginRight: 15 }} />
				</TouchableOpacity>
			),
			headerTitle: 'Video',
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTintColor: 'red',
		});
	}, [navigation]);

	const player = useVideoPlayer(mediaSource, (player) => {
		player.loop = true;
		player.play();
	});
	const player2 = useVideoPlayer(videoSource, (player) => {
		player.loop = true;
		player.play();
	});

	return (
		<View style={styles.contentContainer}>
			<Text style={{ color: '#fff', textAlign: "center" }}>1. Local Video Player</Text>
			<VideoView
				style={styles.video}
				player={player}
				allowsFullscreen
				allowsPictureInPicture
			/>
			<Text style={{ color: '#fff', textAlign: "center" }}>2. Online Video Player</Text>
			<VideoView
				style={styles.video}
				player={player2}
				allowsFullscreen
				allowsPictureInPicture
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,

		alignItems: "center",
		// justifyContent: "center",
		paddingHorizontal: 50,
		backgroundColor: "#000",
	},
	video: {
		width: Dimensions.get("window").width,
		height: 275,
	},
	controlsContainer: {
		padding: 10,
	},
});
