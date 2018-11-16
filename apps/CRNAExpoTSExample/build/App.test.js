import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
it("renders without crashing", () => {
    const rendered = renderer.create(React.createElement(App, null)).toJSON();
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=App.test.js.map