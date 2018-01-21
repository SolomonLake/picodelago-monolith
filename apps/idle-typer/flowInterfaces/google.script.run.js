/* 







 */

import type { GameState } from "../src/parts/gameState/gameStateTypes";

interface $google {
  script: {
    run: {
      withSuccessHandler(
        (response: ServerResponse) => void
      ): {
        withFailureHandler(
          (error: string | Error) => void
        ): {
          getCurrentDocumentStatus(): void,
          saveGameState(newGameState: GameState): void,
          openSidebar(): void
        }
      }
    }
  };
}

type GetCurrentDocumentStatusResponse = {
  type: "GET_CURRENT_DOCUMENT_STATUS_RESPONSE",
  currentDocumentString: string
};

type SaveGameStateResponse = {
  type: "SAVE_GAME_STATE_RESPONSE"
};

type OpenSidebarResponse = {
  type: "OPEN_SIDEBAR_RESPONSE"
};

type ServerResponse =
  | GetCurrentDocumentStatusResponse
  | SaveGameStateResponse
  | OpenSidebarResponse;

declare var google: $google;
