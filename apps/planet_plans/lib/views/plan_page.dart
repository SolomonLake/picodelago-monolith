import 'package:flutter/material.dart';
import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/models/models.dart';
import 'package:redux/redux.dart';

class PlanPage extends StatelessWidget {
  final Store<AppState> store;
  final Plan openPlan;

  PlanPage(this.store, this.openPlan);

  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    final nameController = TextEditingController(text: openPlan.name);
    final nameFocusNode = FocusNode();
    nameFocusNode.addListener(() {
      if (nameController.text != openPlan.name) {
        store.dispatch(updatePlanName(nameController.text, openPlan));
      }
    });

    final Iterable<ListTile> timerTiles = openPlan.timers.values.map(
      (Timer timer) {
        return new ListTile(
          title: new Text(
            timer.name,
            style: _biggerFont,
          ),
          onTap: () {
            // store.dispatch(NavGoToPlanPageAction(plan.id));
          },
        );
      },
    );

    final ScrollController timerTilesScrollController = ScrollController();

    final List<Widget> timerTileWidgets = ListTile.divideTiles(
      context: context,
      tiles: timerTiles,
    ).toList()
      ..add(
        FlatButton(
          child: Text("Add Timer"),
          onPressed: () {
            store.dispatch(addTimer(openPlan));
          },
        ),
      );

    return GestureDetector(
        onTap: () {
          FocusScope.of(context).requestFocus(new FocusNode());
        },
        child: new Scaffold(
          appBar: new AppBar(
            title: TextField(
              decoration: InputDecoration(
                  icon: Icon(Icons.edit),
                  border: InputBorder.none,
                  hintText: 'Enter plan name here'),
              controller: nameController,
              onSubmitted: (String newName) {
                store.dispatch(updatePlanName(newName, openPlan));
              },
              focusNode: nameFocusNode,
            ),
            leading: Builder(
              builder: (BuildContext context) {
                return IconButton(
                  icon: const Icon(Icons.arrow_back),
                  onPressed: () {
                    store.dispatch(NavGoToPlansOverviewPageAction());
                  },
                  tooltip: "Plans Overview",
                );
              },
            ),
            actions: <Widget>[
              new IconButton(
                  icon: const Icon(Icons.settings),
                  onPressed: () => store.dispatch(NavGoToSettingsPageAction())),
            ],
          ),
          body: new ListView(
            children: timerTileWidgets,
            controller: timerTilesScrollController,
          ),
        ));
  }
}
