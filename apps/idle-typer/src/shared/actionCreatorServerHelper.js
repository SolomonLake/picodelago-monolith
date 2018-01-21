/* @flow */

export function handleAppscriptError(error: string | Error): void {
  console.log("ERROR MAKING APPSCRIPT CALL:", error);

  var errorMessage = "";
  if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = error.message;
  }

  const isNotNetworkError = !errorMessage.startsWith("NetworkError");

  if (isNotNetworkError) {
    //handle error
  }
}
