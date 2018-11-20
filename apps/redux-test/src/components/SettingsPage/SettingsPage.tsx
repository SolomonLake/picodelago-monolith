import React, { Component } from "react";
import { View, Button } from "react-native";

export class SettingsPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          backgroundColor: "#DE5448",
          paddingTop: 20
        }}
      >
        <Button
          onPress={() => {
            console.log("pressed");
          }}
          color="#DE5448"
          title="Settings"
        />
      </View>
    );
  }
}
