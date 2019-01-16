import 'package:flutter/material.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/models/models.dart';
import 'package:redux/redux.dart';

class PlanPage extends StatelessWidget {
  final Store<AppState> store;

  PlanPage(this.store);

  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    final Iterable<ListTile> planTiles = store.state.plans.values.map(
      (Plan plan) {
        return new ListTile(
          title: new Text(
            plan.name,
            style: _biggerFont,
          ),
        );
      },
    );
    final List<Widget> divided = ListTile.divideTiles(
      context: context,
      tiles: planTiles,
    ).toList();
    return new Scaffold(
      appBar: new AppBar(
        title: const Text('Your Plans'),
        actions: <Widget>[
          new IconButton(
              icon: const Icon(Icons.settings),
              onPressed: () =>
                  store.dispatch(NavGoToPlansOverviewPageAction())),
        ],
      ),
      body: new ListView(children: divided),
    );
  }
}
