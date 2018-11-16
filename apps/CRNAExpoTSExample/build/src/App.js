import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "Open up App.js to start working on your app!")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
//# sourceMappingURL=App.js.map