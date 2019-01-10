import { Plan } from "../store/IStoreState";
import { Notifications } from "expo";

class NotificationApi {
  notifyPlanIsDone(plan: Plan) {
    console.log("Plan is done plan=", plan);
    const localNotification: Notifications.LocalNotification = {
      title: `${plan.name} - Plan-it`,
      body: `Your plan has finished!`,
      // data?: any;
      ios: {
        sound: true
      },
      android: {
        sound: true,
        sticky: false,
        vibrate: true
        // icon?: string;
        // color?: string;
        // priority?: 'min' | 'low' | 'high' | 'max';
      }
    };
    Notifications.presentLocalNotificationAsync(localNotification);
  }
}

export const notificationApi = new NotificationApi();
