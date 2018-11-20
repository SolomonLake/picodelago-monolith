import React, { Component } from "react";
import { Button, View } from "react-native";

import { Plan, PlanMap } from "../../store/IStoreState";
import { mapObject, toArray } from "../../utils/utils";
import { planName } from "../PlanPage/planUiUtils";

interface IPlansOverviewPageProps {
  plans: PlanMap;
  goToPlanPage: (plan: Plan) => void;
  addPlan: () => void;
}

export class PlansOverviewPageUI extends Component<IPlansOverviewPageProps> {
  constructor(props: IPlansOverviewPageProps) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          alignSelf: "stretch",
          backgroundColor: "#DE5448"
        }}
      >
        <Button onPress={this.props.addPlan} color="#DE5448" title="New Plan" />
        {PlansList(this.props.plans, this.props.goToPlanPage)}
      </View>
    );
  }
}

const PlansList = (plans: PlanMap, goToPlanPage: (plan: Plan) => void) =>
  toArray(
    mapObject(plans, (plan, _) => {
      const goToThisPlanPage = () => {
        goToPlanPage(plan);
      };
      return (
        <View key={plan.id}>
          <Button
            onPress={goToThisPlanPage}
            color="#DE5448"
            title={planName(plan)}
          />
        </View>
      );
    })
  );
