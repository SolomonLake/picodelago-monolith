// import 'package:english_words/english_words.dart';
// import 'package:flutter/material.dart';
// import 'package:planet_plans/actions/actions.dart';
// import 'package:planet_plans/state/state.dart';
// import 'package:redux/redux.dart';

// class FavoritesPage extends StatelessWidget {
//   final Store<AppState> store;

//   FavoritesPage(this.store);

//   final _biggerFont = const TextStyle(fontSize: 18.0);

//   @override
//   Widget build(BuildContext context) {
//     final Iterable<ListTile> tiles = store.state.saved.map(
//       (WordPair pair) {
//         return new ListTile(
//           title: new Text(
//             pair.asPascalCase,
//             style: _biggerFont,
//           ),
//         );
//       },
//     );
//     final List<Widget> divided = ListTile.divideTiles(
//       context: context,
//       tiles: tiles,
//     ).toList();
//     return new Scaffold(
//       appBar: new AppBar(
//         title: const Text('Saved Suggestions'),
//         actions: <Widget>[
//           new IconButton(
//               icon: const Icon(Icons.keyboard_return),
//               onPressed: () =>
//                   store.dispatch(ChangeAppPageAction(AppPage.suggestionsPage))),
//         ],
//       ),
//       body: new ListView(children: divided),
//     );
//   }
// }
