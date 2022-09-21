import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

import type { StatusBarProps } from "react-native";

export type FocusedStatusBarProps = {
	barStyle?: string;
	backgroundColor?: string;
	translucent: boolean;
} & StatusBarProps;

const FocusedStatusBar: React.FC<FocusedStatusBarProps> = props => {
	const isFocused = useIsFocused();

	return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
