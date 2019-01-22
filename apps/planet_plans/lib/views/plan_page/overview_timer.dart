import 'package:flutter/material.dart';
import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/models/models.dart';
import 'package:redux/redux.dart';

class OverviewTimer extends StatelessWidget {
  final Store<AppState> store;
  final Plan plan;
  final Timer timer;

  OverviewTimer(this.store, this.plan, this.timer);

  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    final timerController =
        TextEditingController(text: timer.totalTime.toString());
    final timerFocusNode = FocusNode();
    timerFocusNode.addListener(() {
      if (timerController.text != timer.totalTime.toString()) {
        // store.dispatch(updatePlanName(nameController.text, openPlan));
      }
    });
    // final Widget seconds =
    // final Widget minutes =
    // final Widget hours =
    // final Row times = Row(
    //   children: <Widget>[],
    // );
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          timer.name,
          style: _biggerFont,
        ),
        TextField(
          decoration: InputDecoration(
              border: InputBorder.none, hintText: 'Enter time here'),
          controller: timerController,
          onSubmitted: (String newDuration) {
            // store.dispatch(updatePlanName(newName, openPlan));
          },
          focusNode: timerFocusNode,
        ),
      ],
    );
  }
}

class TimerTime extends StatelessWidget {
  final Store<AppState> store;
  final Plan 
  final Timer timer;  
  final DurationType durationType;

  TextField$P(this.initialText, this.submittedCallback);

  @override
  Widget build(BuildContext context) {
    final textController = TextEditingController(text: initialText);
    final textFocusNode = FocusNode();
    textFocusNode.addListener(() {
      if (textController.text != initialText) {
        submittedCallback(textController.text);
        // store.dispatch(updatePlanName(nameController.text, openPlan));
      }
    });

    return TextField(
      decoration: InputDecoration(
          border: InputBorder.none, hintText: 'Enter time here'),
      controller: textController,
      onSubmitted: (String newDuration) {
        submittedCallback(textController.text);
      },
      focusNode: textFocusNode,
    );
  }
}

class TextField$P extends StatelessWidget {
  final String initialText;
  final void Function(String) submittedCallback;

  TextField$P(this.initialText, this.submittedCallback);

  @override
  Widget build(BuildContext context) {
    final textController = TextEditingController(text: initialText);
    final textFocusNode = FocusNode();
    textFocusNode.addListener(() {
      if (textController.text != initialText) {
        submittedCallback(textController.text);
        // store.dispatch(updatePlanName(nameController.text, openPlan));
      }
    });

    return TextField(
      decoration: InputDecoration(
          border: InputBorder.none, hintText: 'Enter time here'),
      controller: textController,
      onSubmitted: (String newDuration) {
        submittedCallback(textController.text);
      },
      focusNode: textFocusNode,
    );
  }
}
