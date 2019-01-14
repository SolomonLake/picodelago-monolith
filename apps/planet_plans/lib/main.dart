import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';

import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/reducers/app_state_reducer.dart';
import 'package:planet_plans/middleware/middleware.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  final store = Store<AppState>(
    appReducer,
    initialState: AppState(),
    middleware: appMiddleware(),
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
