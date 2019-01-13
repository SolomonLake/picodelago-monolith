import 'package:redux/redux.dart';
import 'package:english_words/english_words.dart';

import 'package:planet_plans/models/models.dart';

class ChangeAppPageAction {
  final AppPage appPage;

  ChangeAppPageAction(this.appPage);
}

class ToggleWordPairSavedAction {
  final WordPair word;

  ToggleWordPairSavedAction(this.word);
}

class AddSuggestionsAction {
  AddSuggestionsAction();
}
