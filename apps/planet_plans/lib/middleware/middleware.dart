import 'package:redux/redux.dart';

import 'package:planet_plans/state/state.dart';

List<Middleware<AppState>> appMiddleware() {
  // save state here

  return [
    TypedMiddleware<AppState, dynamic>(_anyAction),
  ];
}

_anyAction(Store<AppState> store, action, NextDispatcher next) {
  next(action);

  print(action);
}
