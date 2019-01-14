import 'package:redux/redux.dart';
import 'package:english_words/english_words.dart';

import 'package:planet_plans/actions/actions.dart';

final suggestionsReducer = combineReducers<List<WordPair>>([
  TypedReducer<List<WordPair>, AddSuggestionsAction>(_addSuggestionsReducer),
]);

List<WordPair> _addSuggestionsReducer(
    List<WordPair> suggestions, AddSuggestionsAction action) {
  return List.from(suggestions)..addAll(generateWordPairs().take(10));
}
