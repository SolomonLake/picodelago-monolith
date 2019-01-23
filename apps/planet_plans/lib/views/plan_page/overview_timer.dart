import 'package:flutter/material.dart';
import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/actionCreators/timers_action_creator.dart';
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
    final Widget hours =
        timerTime(TimeType.hours, timer.times.hrs, (String newHrsStr) {
      final int newHrs = int.tryParse(newHrsStr);
      final TimerTimes newTimerTimes = TimerTimes
      store.dispatch(updateTimerTimes(plan, timer, ));
    });
    final Widget minutes = timerTime(TimeType.minutes);
    final TimerTime seconds = timerTime(TimeType.seconds);
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

  Row timerTime(TimeType timeType, int initialTime,
      void Function(String) submittedCallback) {
    return Row(
      children: <Widget>[
        Text(
          timeTypeToString(timeType),
        ),
        TextField$P(initialTime.toString(), submittedCallback)
      ],
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
