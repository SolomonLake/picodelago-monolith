import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

export class PlansOverviewPage extends Component {
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
          title="Plans Overview"
        />
      </View>
    );
  }
}
