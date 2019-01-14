import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/models/models.dart';

SuggestionsPage(store) {
  return new Scaffold(
    appBar: AppBar(
      title: Text('Startup Name Generator'),
      actions: <Widget>[
        new IconButton(
            icon: const Icon(Icons.list),
            onPressed: () =>
                store.dispatch(ChangeAppPageAction(AppPage.favoritesPage))),
      ],
    ),
    body: _buildSuggestions(store),
  );
}

Widget _buildSuggestions(store) {
  return ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemBuilder: /*1*/ (context, i) {
        if (i.isOdd) return Divider(); /*2*/

        final index = i ~/ 2; /*3*/
        if (index >= store.state.suggestions.length) {
          store.dispatch(AddSuggestionsAction());
        }
        return _buildRow(store, store.state.suggestions[index]);
      });
}

Widget _buildRow(store, WordPair pair) {
  final _biggerFont = const TextStyle(fontSize: 18.0);
  final bool alreadySaved = store.state.saved.contains(pair);
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
      store.dispatch(ToggleWordPairSavedAction(pair));
    },
  );
}
