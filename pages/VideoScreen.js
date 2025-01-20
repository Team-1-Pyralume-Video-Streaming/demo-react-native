import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Dimensions } from "react-native";
import mediaVideo from "../assets/demo.mp4";

const mediaSource = mediaVideo;

const videoSource =
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen() {
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
			<VideoView
				style={styles.video}
				player={player}
				allowsFullscreen
				allowsPictureInPicture
			/>

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
		marginTop: 40,
		width: Dimensions.get("window").width,
		height: 275,
	},
	controlsContainer: {
		padding: 10,
	},
});
