import { Text, View } from 'react-native';

interface ClothingCardProps {
	id: string;
	title: string;
}

export const ClothingCard = ({ id, title }: ClothingCardProps) => {
	return (
		<View key={id}>
			<Text>{title}</Text>
		</View>
	);
};
