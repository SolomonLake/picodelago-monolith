function GET_ENV(varname) {
  return getTestingEnv(varname);
  // return getProductionEnv(varname);
}

function getTestingEnv(varname) {
  return {
    JWT_TOKEN:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnQiOiJnb29nbGVTbGlkZXNBZGRvbiIsImlhdCI6MTUxNTEyNzM5MH0.MXaX-ya9c3W7VJUGBkyLLc5DLnEYoSSZnswz9UHav2E",
    RELEASE_STAGE: "development",
    PD_MAIN_ROOT: "https://app.pdstaging.com"
  }[varname];
}

function getProductionEnv(varname) {
  return {
    JWT_TOKEN: "XXXX",
    RELEASE_STAGE: "production",
    PD_MAIN_ROOT: "https://app.peardeck.com"
  }[varname];
}
