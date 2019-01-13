import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  final store = Store<AppState>(
    appReducer,
    initialState: AppState(),
    // middleware: createStoreTodosMiddleware(),
  );

  @override
  Widget build(BuildContext context) {
    return StoreProvider(
        store: store,
        child: MaterialApp(
          title: 'Startup Name Generator',
          theme: new ThemeData(
            primaryColor: Colors.white,
          ),
          home: MainPage(store),
        ));
  }
}

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

AppState appReducer(AppState state, action) {
  return AppState(
    activePage: activePageReducer(state.activePage, action),
    suggestions: suggestionsReducer(state.suggestions, action),
    saved: savedReducer(state.saved, action),
  );
}

final activePageReducer = combineReducers<AppPage>([
  TypedReducer<AppPage, ChangeAppPageAction>(_changeAppPageReducer),
]);

AppPage _changeAppPageReducer(AppPage activePage, ChangeAppPageAction action) {
  return action.appPage;
}

final suggestionsReducer = combineReducers<List<WordPair>>([
  TypedReducer<List<WordPair>, AddSuggestionsAction>(_addSuggestionsReducer),
]);

List<WordPair> _addSuggestionsReducer(
    List<WordPair> suggestions, AddSuggestionsAction action) {
  return List.from(suggestions)..addAll(generateWordPairs().take(10));
}

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

class MainPage extends StatelessWidget {
  final _biggerFont = const TextStyle(fontSize: 18.0);
  final Store<AppState> store;

  MainPage(this.store);

  @override
  Widget build(BuildContext context) {
    return new StoreConnector<AppState, AppState>(
        converter: (store) => store.state,
        builder: (context, callback) {
          switch (this.store.state.activePage) {
            case AppPage.mainPage:
              return new Scaffold(
                appBar: AppBar(
                  title: Text('Startup Name Generator'),
                  actions: <Widget>[
                    new IconButton(
                        icon: const Icon(Icons.list),
                        onPressed: () => this.store.dispatch(
                            ChangeAppPageAction(AppPage.favoritesPage))),
                  ],
                ),
                body: _buildSuggestions(),
              );
            case AppPage.favoritesPage:
              final Iterable<ListTile> tiles = this.store.state.saved.map(
                (WordPair pair) {
                  return new ListTile(
                    title: new Text(
                      pair.asPascalCase,
                      style: _biggerFont,
                    ),
                  );
                },
              );
              final List<Widget> divided = ListTile.divideTiles(
                context: context,
                tiles: tiles,
              ).toList();
              return new Scaffold(
                appBar: new AppBar(
                  title: const Text('Saved Suggestions'),
                  actions: <Widget>[
                    new IconButton(
                        icon: const Icon(Icons.keyboard_return),
                        onPressed: () => this
                            .store
                            .dispatch(ChangeAppPageAction(AppPage.mainPage))),
                  ],
                ),
                body: new ListView(children: divided),
              );
          }
        });
  }

  Widget _buildSuggestions() {
    return ListView.builder(
        padding: const EdgeInsets.all(16.0),
        itemBuilder: /*1*/ (context, i) {
          if (i.isOdd) return Divider(); /*2*/

          final index = i ~/ 2; /*3*/
          if (index >= this.store.state.suggestions.length) {
            this.store.dispatch(AddSuggestionsAction());
          }
          return _buildRow(this.store.state.suggestions[index]);
        });
  }

  Widget _buildRow(WordPair pair) {
    final bool alreadySaved = this.store.state.saved.contains(pair);
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
      trailing: new Icon(
        alreadySaved ? Icons.favorite : Icons.favorite_border,
        color: alreadySaved ? Colors.red : null,
      ),
      onTap: () {
        this.store.dispatch(ToggleWordPairSavedAction(pair));
      },
    );
  }
}
