/** @format */

import React from 'react';
import {
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Text,
	Platform,
	StyleSheet,
} from 'react-native';

const Tile1 = (props) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<TouchableCmp
			onPress={() => {
				props.onPress(props.weight, props.id);
			}}>
			<View style={styles.productGrid}>
				<View
					style={
						props.id === props.activeIdW
							? styles.focusedweightContainer
							: styles.weightContainer
					}>
					<Text style={styles.weightText}>{props.weight}</Text>
				</View>
			</View>
		</TouchableCmp>
	);
};
const styles = StyleSheet.create({
	productGrid: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 10,
	},

	weightContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		height: 40,
		borderWidth: 2,
		borderColor: '#000',
		borderStyle: 'solid',
		marginVertical: 10,
		backgroundColor: 'white',
	},
	focusedweightContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		height: 40,
		borderWidth: 2,
		borderColor: '#000',
		borderStyle: 'solid',
		marginVertical: 10,
		backgroundColor: '#CCCC00',
	},
});
export default Tile1;
