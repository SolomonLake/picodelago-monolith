import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/views/favorites_page.dart';
import 'package:planet_plans/views/suggestions_page.dart';
import 'package:redux/redux.dart';

class MainView extends StatelessWidget {
  final Store<AppState> store;

  MainView(this.store);

  @override
  Widget build(BuildContext context) {
    return new StoreConnector<AppState, AppState>(
        converter: (store) => store.state,
        builder: (context, callback) {
          switch (this.store.state.activePage) {
            case AppPage.suggestionsPage:
              return SuggestionsPage(this.store);
            case AppPage.favoritesPage:
              return FavoritesPage(this.store);
          }
        });
  }
}
