import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Name Generator',
      theme: new ThemeData(
        primaryColor: Colors.white,
      ),
      home: RandomWords(),
    );
  }
}

class ChangePageStateAction {
  final PageState pageState;

  ChangePageStateAction(this.pageState);
}

class ToggleWordFavoriteStateAction {
  final WordPair word;

  ToggleWordFavoriteStateAction(this.word);
}

class AppState {
  final PageState currentPage;
  final List<WordPair> _suggestions;
  final Set<WordPair> _saved;

  AppState(this.currentPage,this._suggestions, this._saved,);

  factory AppState.initial() =>
      AppState(PageState.mainPage, List.unmodifiable([]), new Set<WordPair>());
}

enum PageState {
  mainPage, favoritesPage
}

class RandomWords extends StatelessWidget {
  final Store<RandomWordsState> store = Store<RandomWordsState>(
    appReducer,
    /* Function defined in the reducers file */
    initialState: RandomWordsState.initial(),
    middleware: createStoreMiddleware(),
  );

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: Text('Startup Name Generator'),
          actions: <Widget>[
            new IconButton(icon: const Icon(Icons.list), onPressed: _pushSaved),
          ],
        ),
        body: _buildSuggestions(),
      );
}


RandomWordsState randomWordsStateReducer(RandomWordsState state, action) => RandomWordsState(toDoListReducer(state.toDos, action), listStateReducer(state.listState, action));

final Reducer<List<ToDoItem>> toDoListReducer = // Boilerplate ignored
final Reducer<ListState> listStateReducer = combineReducers<ListState>([
  TypedReducer<ListState, DisplayListOnlyAction>(_displayListOnly),
  TypedReducer<ListState, DisplayListWithNewItemAction>(_displayListWithNewItem),
]);

///

class _RandomWordsState extends State<RandomWords> {
  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Startup Name Generator'),
        actions: <Widget>[
          new IconButton(icon: const Icon(Icons.list), onPressed: _pushSaved),
        ],
      ),
      body: _buildSuggestions(),
    );
  }

  void _pushSaved() {
    Navigator.of(context).push(
      new MaterialPageRoute<void>(
        builder: (BuildContext context) {
          final Iterable<ListTile> tiles = _saved.map(
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
            ),
            body: new ListView(children: divided),
          );
        },
      ),
    );
  }

  Widget _buildSuggestions() {
    return ListView.builder(
        padding: const EdgeInsets.all(16.0),
        itemBuilder: /*1*/ (context, i) {
          if (i.isOdd) return Divider(); /*2*/

          final index = i ~/ 2; /*3*/
          if (index >= _suggestions.length) {
            _suggestions.addAll(generateWordPairs().take(10)); /*4*/
          }
          return _buildRow(_suggestions[index]);
        });
  }

  Widget _buildRow(WordPair pair) {
    final bool alreadySaved = _saved.contains(pair);
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
        setState(() {
          if (alreadySaved) {
            _saved.remove(pair);
          } else {
            _saved.add(pair);
          }
        });
      },
    );
  }
}
