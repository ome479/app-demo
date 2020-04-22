/** @format */

import Meal from '../models/meal';
import Weight from '../models/weight';
export const WEIGHT = [
	new Weight('w1', 25),
	new Weight('w2', 50),
	new Weight('w3', 75),
	new Weight('w4', 100),
	new Weight('w5', 125),
	new Weight('w6', 150),
	new Weight('w7', 175),
	new Weight('w8', 200),
	new Weight('w9', 225),
	new Weight('w10', 250),
	new Weight('w11', 275),
	new Weight('w12', 300),
];
export const MEALS = [
	new Meal(
		'm1',
		'Spaghetti with Tomato Sauce',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'
	),

	new Meal(
		'm2',
		'Toast Hawaii',
		'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'
	),

	new Meal(
		'm3',
		'Classic Hamburger',
		'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'
	),

	new Meal(
		'm4',
		'Wiener Schnitzel',
		'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg'
	),
];
