/** @format */

import React, { useState, useCallback } from 'react';
import {
	FlatList,
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity,
	TouchableNativeFeedback,
	Text,
	Platform,
	Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Tile from '../reusable/Tile';
import Tile1 from '../reusable/Tile1';
import { MEALS, WEIGHT } from '../../data/dummy-data';
const initialState = {
	name: '',
	kcal: 0,
	protien: 0,
	kollydrater: 0,
	fett: 0,
	weight: 0,
	pris: 0,
};

const MainPage = () => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android') {
		TouchableCmp = TouchableNativeFeedback;
	}
	const [activeIdI, setActiveIdI] = useState();
	const [activeIdW, setActiveIdW] = useState();
	const [state, setState] = useState(initialState);
	const [active, setActive] = useState(false);
	const [name, setName] = useState('');
	const handleClickI = useCallback((name, id) => {
		setName(name);
		setState(initialState);
		setActive(true);
		setActiveIdI(id);
		setActiveIdW();
	}, []);
	const handleClickW = useCallback((w, id) => {
		setActiveIdW(id);
		setState({
			...state,
			['kcal']: w * 0.02,
			['protien']: w * 0.04,
			['kollydrater']: w * 0.06,
			['fett']: w * 0.08,
			['pris']: w * 0.05,
			['weight']: w,
		});
	}, []);
	const handleAddToCart = useCallback(() => {
		let cartData = { ...state, ['name']: name };
		// console.log(cartData);
		Alert.alert(
			'Your Cart',
			`submited product details is ${JSON.stringify(cartData)}`,
			[
				{
					text: 'Ask me later',
					onPress: () => console.log('Ask me later pressed'),
				},
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') },
			],
			{ cancelable: false }
		);
	}, []);

	const renderGridItem = (itemData) => {
		return (
			<Tile
				id={itemData.item.id}
				activeIdI={activeIdI}
				image={itemData.item.imageUrl}
				title={itemData.item.title}
				onPress={handleClickI}
			/>
		);
	};
	const renderGridItem1 = (itemData) => {
		return (
			<Tile1
				id={itemData.item.id}
				activeIdW={activeIdW}
				weight={itemData.item.weight}
				onPress={handleClickW}
			/>
		);
	};
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				{/* <Text style={styles.text}>MENU</Text> */}
			</View>

			<FlatList
				keyExtractor={(item, index) => item.id}
				data={MEALS}
				renderItem={renderGridItem}
				// numColumns={1}
				style={{ width: '100%' }}
			/>
			<View style={styles.viktHeading}>
				<Text style={styles.viktHeadingText}>VIKT ( G )</Text>
			</View>
			<View style={styles.viktList}>
				{active && (
					<FlatList
						keyExtractor={(item, index) => item.id}
						data={WEIGHT}
						renderItem={renderGridItem1}
						numColumns={6}
						style={{ width: '100%' }}
					/>
				)}
			</View>

			<View style={styles.naringsvardeHeading}>
				<Text style={styles.naringsvardeHeadingText}>NARINGSVARDE</Text>
				<Text style={styles.naringsvardeHeadingText}>PRIS</Text>
			</View>
			<View style={styles.naringsvardeList}>
				<View style={styles.onlyCal}>
					<View style={styles.listItemH}>
						<Text style={styles.leftText}>kcal</Text>
						<Text style={styles.tightText}>{state.kcal}</Text>
					</View>
					<View style={styles.listItemH}>
						<Text style={styles.leftText}>protien</Text>
						<Text style={styles.rightText}>{state.protien}</Text>
					</View>
					<View style={styles.listItemH}>
						<Text style={styles.leftText}>kollydrater</Text>
						<Text style={styles.rightText}>{state.kollydrater}</Text>
					</View>
					<View style={styles.listItemH}>
						<Text style={styles.leftText}>fett</Text>
						<Text style={styles.rightText}>{state.fett}</Text>
					</View>
				</View>
				<View style={styles.pris}>
					<Text style={styles.pris}>{state.pris} kr</Text>
				</View>
			</View>
			<View style={styles.cartBtn}>
				<TouchableCmp onPress={handleAddToCart}>
					<Text style={!!state.pris ? styles.enabled : styles.disabled}>
						Kolhydrat
						<Ionicons
							name='md-cart'
							size={25}
							color={!!state.pris ? 'black' : `grey`}
						/>
					</Text>
				</TouchableCmp>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		flexDirection: 'row',
	},
	header: {
		flex: 1,
		padding: 20,
	},
	text: {
		color: 'red',
		fontSize: 20,
	},
	viktHeading: {
		paddingHorizontal: 20,
	},
	viktHeadingText: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
	},
	viktList: {
		paddingHorizontal: 15,
		height: 120,
		width: '100%',
	},
	naringsvardeHeading: {
		width: '85%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	naringsvardeHeadingText: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
	},
	naringsvardeList: {
		flexDirection: 'row',
		width: '85%',
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	cal: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	withPris: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	listItemH: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
	},
	pris: {
		marginVertical: 5,
		fontWeight: 'bold',
	},
	middle: {
		marginVertical: 10,
		textAlign: 'center',
	},
	leftText: {
		textAlign: 'left',
		width: '48%',
	},
	rightText: {
		textAlign: 'right',
	},
	cartBtn: {
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: 35,
	},
	enabled: {
		color: 'black',
		fontSize: 25,
	},
	disabled: {
		color: 'grey',
		fontSize: 25,
	},
});
export default MainPage;
