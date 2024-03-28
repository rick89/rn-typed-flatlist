import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { ClothingItem } from './types';
import { ClothingCard } from './components/ClothingCard';

export default function App() {
	const [data, setData] = useState<ClothingItem[]>();

	useEffect(() => {
		const getData = async () => {
			axios
				.get('https://fakestoreapi.com/products')
				.then((response) => {
					setData(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		getData();
	}, []);

	const Item = ({ item }: { item: ClothingItem }) => (
		<ClothingCard id={item.id} title={item.title} key={item.id} />
	);

	const renderItem: ListRenderItem<ClothingItem> = ({ item }) => (
		<Item item={item} />
	);

	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item: ClothingItem) => item.id}
			/>
		</SafeAreaView>
	);
}
