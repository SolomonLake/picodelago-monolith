import 'package:meta/meta.dart';
import 'package:english_words/english_words.dart';

@immutable
class AppState {
  final AppPage activePage;
  final List<WordPair> suggestions;
  final List<WordPair> saved;

  AppState({
    this.activePage = AppPage.mainPage,
    this.suggestions = const [],
    this.saved = const [],
  });
}

enum AppPage { mainPage, favoritesPage }
