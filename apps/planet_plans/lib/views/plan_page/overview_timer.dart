import 'package:flutter/material.dart';
import 'package:planet_plans/actionCreators/plans_action_creator.dart';
import 'package:planet_plans/actionCreators/timers_action_creator.dart';
import 'package:planet_plans/actions/actions.dart';
import 'package:planet_plans/state/state.dart';
import 'package:planet_plans/state/stateUtils/timerTimesUtils.dart';
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
        timerTimeWidget(TimeType.hours, timer.times.hrs, (String newHrsStr) {
      final int newHrs = int.tryParse(newHrsStr);
      final TimerTimes newTimerTimes = updateHrs(newHrs, timer.times);
      store.dispatch(updateTimerTimes(plan, timer, newTimerTimes));
    });
    final Widget minutes = timerTimeWidget(TimeType.minutes, timer.times.mins,
        (String newMinsStr) {
      final int newMins = int.tryParse(newMinsStr);
      final TimerTimes newTimerTimes = updateMins(newMins, timer.times);
      store.dispatch(updateTimerTimes(plan, timer, newTimerTimes));
    });
    final Widget seconds = timerTimeWidget(TimeType.seconds, timer.times.secs,
        (String newSecsStr) {
      final int newSecs = int.tryParse(newSecsStr);
      final TimerTimes newTimerTimes = updateHrs(newSecs, timer.times);
      store.dispatch(updateTimerTimes(plan, timer, newTimerTimes));
    });
    final Row times = Row(
      children: <Widget>[hours, minutes, seconds],
    );
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        Text(
          timer.name,
          style: _biggerFont,
        ),
        Flexible(fit: FlexFit.loose, child: times),
      ],
    );
  }

  Widget timerTimeWidget(TimeType timeType, int initialTime,
      void Function(String) submittedCallback) {
    return Row(
      children: <Widget>[
        Container(
            padding: EdgeInsets.only(left: 5),
            child: Text(
              timeTypeToString(timeType) + ":",
            )),
        Container(
          width: 20,
          padding: EdgeInsets.only(left: 2),
          child: TextField$P(initialTime.toString(), submittedCallback),
        )
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
