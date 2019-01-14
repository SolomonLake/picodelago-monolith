import 'package:redux/redux.dart';
import 'package:english_words/english_words.dart';

import 'package:planet_plans/actions/actions.dart';

final savedReducer = combineReducers<List<WordPair>>([
  TypedReducer<List<WordPair>, ToggleWordPairSavedAction>(
      _toggleWordPairSavedReducer),
]);

List<WordPair> _toggleWordPairSavedReducer(
    List<WordPair> saved, ToggleWordPairSavedAction action) {
  final bool alreadySaved = saved.contains(action.word);
  if (alreadySaved) {
    return List.from(saved)..remove(action.word);
  } else {
    return List.from(saved)..add(action.word);
  }
}
