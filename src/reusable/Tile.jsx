/** @format */

import React from 'react';
import {
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Text,
	Platform,
	ImageBackground,
	StyleSheet,
} from 'react-native';

const Tile = (props) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.mealItem}>
			<TouchableCmp
				onPress={() => {
					props.onPress(props.title, props.id);
				}}>
				<View style={styles.productGrid}>
					<View style={styles.mealRow}>
						<ImageBackground
							source={{ uri: props.image }}
							style={
								props.id === props.activeIdI
									? styles.activeBgImage
									: styles.bgImage
							}></ImageBackground>
					</View>
					<View style={styles.titleContainer}>
						<Text style={styles.title} numberOfLines={3}>
							{props.title}
						</Text>
					</View>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		height: 100,
		overflow: 'hidden',
		marginVertical: 5,
	},
	productGrid: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	mealRow: {
		width: '35%',
	},
	titleContainer: {
		width: '65%',
		color: '#000',
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		borderWidth: 3,
		borderColor: 'transparent',
		borderStyle: 'solid',
	},
	activeBgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		borderWidth: 3,
		borderColor: '#CCCC00',
		borderStyle: 'solid',
	},

	title: {
		fontSize: 14,
		width: '100%',
		color: '#000',
		textAlign: 'left',
		flexWrap: 'wrap',
	},
});
export default Tile;
