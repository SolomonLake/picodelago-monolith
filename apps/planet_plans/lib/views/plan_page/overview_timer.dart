import 'package:flutter/material.dart';
import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/models/models.dart';
import 'package:planet_plans/utils/timer_ui_utils.dart';
import 'package:redux/redux.dart';

class OverviewTimer extends StatelessWidget {
  final Store<AppState> store;
  final Plan plan;
  final Timer timer;

  OverviewTimer(this.store, this.plan, this.timer);

  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    final Widget hours = TimerTime(store, plan, timer, TimeType.hours);
    final Widget minutes = TimerTime(store, plan, timer, TimeType.minutes);
    final TimerTime seconds = TimerTime(store, plan, timer, TimeType.seconds);
    final Row times = Row(
      children: <Widget>[hours, minutes, seconds],
    );
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          timer.name,
          style: _biggerFont,
        ),
        times,
      ],
    );
  }
}

class TimerTime extends StatelessWidget {
  final Store<AppState> store;
  final Plan plan;
  final Timer timer;
  final TimeType timeType;

  TimerTime(this.store, this.plan, this.timer, this.timeType);

  @override
  Widget build(BuildContext context) {
    // final String text =
    return Row(
      children: <Widget>[Text(timeTypeToString(timeType))],
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
