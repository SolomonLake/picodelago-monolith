import 'package:redux/redux.dart';

import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/actions/actions.dart';

final activePageReducer = combineReducers<AppPage>([
  TypedReducer<AppPage, ChangeAppPageAction>(_changeAppPageReducer),
]);

AppPage _changeAppPageReducer(AppPage activePage, ChangeAppPageAction action) {
  return action.appPage;
}
