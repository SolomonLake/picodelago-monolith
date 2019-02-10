import 'package:flutter/material.dart';
import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/state/state.dart';
import 'package:redux/redux.dart';

class PlansOverviewPage extends StatelessWidget {
  final Store<AppState> store;

  PlansOverviewPage(this.store);

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
          onTap: () {
            store.dispatch(NavGoToPlanPageAction(plan.id));
          },
        );
      },
    );
    final List<Widget> planTileWidgets = ListTile.divideTiles(
      context: context,
      tiles: planTiles,
    ).toList();
    print("rendering list again");
    return new Scaffold(
      appBar: new AppBar(
        title: const Text('Your Plans'),
        actions: <Widget>[
          new IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              store.dispatch(NavGoToSettingsPageAction());
            },
          )
        ],
      ),
      body: ListView(children: planTileWidgets),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          store.dispatch(addPlan());
        },
        tooltip: 'Add Plan',
        child: Icon(Icons.add),
      ),
    );
  }
}
