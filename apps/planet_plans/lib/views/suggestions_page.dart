import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/models/models.dart';
import 'package:redux/redux.dart';

class SuggestionsPage extends StatelessWidget {
  final Store<AppState> store;

  SuggestionsPage(this.store);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text('Startup Name Generator'),
        actions: <Widget>[
          new IconButton(
              icon: const Icon(Icons.list),
              onPressed: () => this
                  .store
                  .dispatch(ChangeAppPageAction(AppPage.favoritesPage))),
        ],
      ),
      body: _buildSuggestions(),
    );
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
    final _biggerFont = const TextStyle(fontSize: 18.0);
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
