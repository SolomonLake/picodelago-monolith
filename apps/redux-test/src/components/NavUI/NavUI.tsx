import * as React from "react";

import Logo from "../../assets/logo.svg";
import { Button, NativeSyntheticEvent, NativeTouchEvent } from "react-native";

interface INavBarProps {
  goToSettings: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export default function NavBar(props: INavBarProps) {
  return (
    <Button onPress={props.goToSettings} color="#DE5448" title="Settings" />
  );
}
