import 'package:flutter/material.dart';
import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/state/state.dart';
import 'package:planet_plans/views/plan_page/overview_timer.dart';
import 'package:redux/redux.dart';

class PlanPage extends StatelessWidget {
  final Store<AppState> store;
  final Plan openPlan;

  PlanPage(this.store, this.openPlan);

  @override
  Widget build(BuildContext context) {
    final nameController = TextEditingController(text: openPlan.name);
    final nameFocusNode = FocusNode();
    nameFocusNode.addListener(() {
      if (nameController.text != openPlan.name) {
        store.dispatch(updatePlanName(nameController.text, openPlan));
      }
    });

    final Iterable<Widget> timerTiles = openPlan.timers.values.map(
      (Timer timer) {
        return OverviewTimer(
          store,
          openPlan,
          timer,
        );
      },
    );

    final List<Widget> timerTileWidgets = timerTiles.toList()
      ..add(
        FlatButton(
          child: Text("Add Timer"),
          onPressed: () {
            store.dispatch(addTimer(openPlan));
          },
        ),
      );

    final ScrollController timerTilesScrollController = ScrollController();

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
              new FlatButton(
                  child: const Text("Start Plan"),
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
