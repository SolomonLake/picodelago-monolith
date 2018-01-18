// @flow
// @seehttps://developers.google.com/apps-script/guides/html/reference/run

interface gas$Run {
  withFailureHandler((Error, ...args: any[]) => any): void;
  withSuccessHandler((...args: any[]) => any): void;
  withUserObject(object: Object): void;
}
