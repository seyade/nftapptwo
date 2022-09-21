import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../../constants";

import type { StyleProp } from "react-native";

export type CircleButtonProps = {
	imgUrl: string;
	handlPress: () => void;
} & StyleProp<any>;

export type RectButtonProps = {
	minWidth: number;
	fontSize: number;
	handlePress: () => void;
} & StyleProp<any>;

export const CircleButton: React.FC<CircleButtonProps> = ({
	imgUrl,
	handlPress,
	...props
}) => (
	<TouchableOpacity
		style={{
			position: "absolute",
			width: 40,
			height: 40,
			backgroundColor: COLORS.white,
			borderRadius: SIZES.extraLarge,
			alignItems: "center",
			justifyContent: "center",
			...SHADOWS.light,
			...props,
		}}
		onPress={handlPress}
	>
		<Image
			source={imgUrl as any}
			resizeMode="contain"
			style={{ width: 24, height: 24 }}
		/>
	</TouchableOpacity>
);

export const RectButton: React.FC<RectButtonProps> = ({
	minWidth,
	fontSize,
	handlePress,
	...props
}) => (
	<TouchableOpacity
		style={{
			backgroundColor: COLORS.primary,
			borderRadius: SIZES.extraLarge,
			minWidth: minWidth,
			padding: SIZES.small,
			...props,
		}}
		onPress={handlePress}
	>
		<Text
			style={{
				fontFamily: FONTS.semiBold,
				fontSize: fontSize,
				color: COLORS.white,
				textAlign: "center",
			}}
		>
			Place a bid
		</Text>
	</TouchableOpacity>
);
