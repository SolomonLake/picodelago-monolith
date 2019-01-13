import 'package:planet_plans/models/models.dart';
import 'active_page_reducer.dart';

AppState appReducer(AppState state, action) {
  return AppState(
    activePage: activePageReducer(state.activePage, action),
    suggestions: suggestionsReducer(state.suggestions, action),
    saved: savedReducer(state.saved, action),
  );
}
