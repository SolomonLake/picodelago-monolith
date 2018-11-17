import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

export default class PlanPage extends Component {
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
          title="Plan"
        />
      </View>
    );
  }
}
