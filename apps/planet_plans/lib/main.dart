import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:planet_plans/views/main_view.dart';
import 'package:redux/redux.dart';

import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/reducers/app_state_reducer.dart';
import 'package:planet_plans/middleware/middleware.dart';

void main() => runApp(MainApp());

class MainApp extends StatelessWidget {
  final store = Store<AppState>(
    appReducer,
    initialState: AppState.initialState(),
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
          home: MainView(store),
        ));
  }
}
