/* @flow */
import type { SidebarStoreExternalState } from "./sidebarTypes";

const mastheadScrollReferenceIds = {
  "library.beginningOfLesson": "masthead-scroll-reference--beginning",
  "library.duringLesson": "masthead-scroll-reference--during",
  "library.endOfLesson": "masthead-scroll-reference--end"
};
const mastheadIds = {
  "library.beginningOfLesson": "masthead--beginning",
  "library.duringLesson": "masthead--during",
  "library.endOfLesson": "masthead--end"
};
const mastheadDetailsIds = {
  "library.beginningOfLesson": "masthead-details--beginning",
  "library.duringLesson": "masthead-details--during",
  "library.endOfLesson": "masthead-details--end"
};
const mastheadNavigationIds = {
  "library.beginningOfLesson": "masthead-navigation--beginning",
  "library.duringLesson": "masthead-navigation--during",
  "library.endOfLesson": "masthead-navigation--end"
};

// Keep in line with _masthead.sass
const mastheadInitialHeight = 5.8 * 16;
const navInitialHeight = 3 * 16;
const mastheadTargetHeight = 2 * 16;
const mastheadTravelDistance = mastheadInitialHeight - mastheadTargetHeight;
const navTravelDistance = navInitialHeight - mastheadTargetHeight;

let mastheadScrollReferenceEl;
let mastheadEl;
let mastheadDetailsEl;
let mastheadNavigationEl;

let animationFrameTicking = false;

export function sidebarEffects(
  currentState: SidebarStoreExternalState,
  prevState: SidebarStoreExternalState
) {
  if (currentState.sidebarView !== prevState.sidebarView) {
    initializeScrollListenersAndElementsForView(currentState);
  }
}

function updateMastheadStyles() {
  if (
    mastheadEl &&
    mastheadScrollReferenceEl &&
    mastheadNavigationEl &&
    mastheadDetailsEl
  ) {
    const percentTraveled =
      Math.min(mastheadTravelDistance, mastheadScrollReferenceEl.scrollTop) /
      mastheadTravelDistance;
    mastheadEl.style.height =
      mastheadInitialHeight - mastheadTravelDistance * percentTraveled + "px";
    mastheadNavigationEl.style.height =
      navInitialHeight - navTravelDistance * percentTraveled + "px";
    mastheadDetailsEl.style.opacity = String(1 - percentTraveled);
  }
}

function initializeScrollListenersAndElementsForView(
  state: SidebarStoreExternalState
): void {
  removeAnyPreviousScrollListeners();
  const view = state.sidebarView;
  switch (view) {
    case "library.beginningOfLesson":
    case "library.duringLesson":
    case "library.endOfLesson":
      const mastheadDomRef = document.getElementById(mastheadIds[view]);
      const mastheadDetailsDomRef = document.getElementById(
        mastheadDetailsIds[view]
      );
      const mastheadNavigationDomRef = document.getElementById(
        mastheadNavigationIds[view]
      );
      const mastheadScrollRefrenceDomRef = document.getElementById(
        mastheadScrollReferenceIds[view]
      );
      if (
        mastheadScrollRefrenceDomRef &&
        mastheadDomRef &&
        mastheadDetailsDomRef &&
        mastheadNavigationDomRef
      ) {
        mastheadEl = mastheadDomRef;
        mastheadScrollReferenceEl = mastheadScrollRefrenceDomRef;
        mastheadDetailsEl = mastheadDetailsDomRef;
        mastheadNavigationEl = mastheadNavigationDomRef;
        addScrollListeners(mastheadScrollReferenceEl);
      } else {
        throw new Error(
          `Couldn't find scroll elements for view: ${state.sidebarView}`
        );
      }
      break;
    case "main":
      mastheadEl = null;
      mastheadScrollReferenceEl = null;
      break;
    default:
      throw new Error(`Got unknown view: ${state.sidebarView}`);
  }
}

function onNextFrame(fn) {
  if (!animationFrameTicking) {
    animationFrameTicking = true;
    window.requestAnimationFrame(() => {
      animationFrameTicking = false;
      fn();
    });
  }
}

function removeAnyPreviousScrollListeners() {
  if (mastheadScrollReferenceEl) {
    mastheadScrollReferenceEl.removeEventListener("scroll", () =>
      onNextFrame(updateMastheadStyles)
    );
  }
}

function addScrollListeners(element: HTMLElement) {
  element.addEventListener("scroll", () => onNextFrame(updateMastheadStyles));
}
