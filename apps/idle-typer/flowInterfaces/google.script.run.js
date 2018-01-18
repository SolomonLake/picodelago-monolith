/* 







 */

interface $google {
  script: {
    run: {
      withSuccessHandler(
        (response: ServerResponse) => void
      ): {
        withFailureHandler(
          (error: string | Error) => void
        ): {
          updateGameState(newGameState: GameState): void,
          openSidebar(): void
        }
      }
    }
  };
}

type UpdateGameStateResponse = {
  type: "UPDATE_GAME_STATE_RESPONSE",
  currentDocumentString: string
};

type OpenSidebarResponse = {
  type: "OPEN_SIDEBAR_RESPONSE"
};

type ServerResponse = UpdateGameStateResponse | OpenSidebarResponse;

declare var google: $google;
