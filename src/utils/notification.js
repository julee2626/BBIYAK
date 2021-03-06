import PushNotification from "react-native-push-notification";

class Notifications {
  constructor() {
    PushNotification.createChannel(
      {
        channelId: "BBIYAK",
        channelName: "drug notification",
        channelDescription: "Reminder for drug notification",
      },
      () => {},
    );
  }

  scheduleNotification(date, day, drugName) {
    PushNotification.localNotificationSchedule({
      channelId: "BBIYAK",
      title: "π₯ μμ½!",
      message: `μμ½ν ${drugName} λ¨Ήμ μκ°μ΄μμ!`,
      date,
      userInfo: { ...day, drugName },
      repeatType: "day",
    });
  }

  async getAllNotifications() {
    return new Promise(res =>
      PushNotification.getScheduledLocalNotifications(list => {
        res(list);
      }),
    );
  }

  cancelAllLocalNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }

  cancelLocalNotification(id) {
    PushNotification.cancelLocalNotification(id);
  }
}

export default new Notifications();
