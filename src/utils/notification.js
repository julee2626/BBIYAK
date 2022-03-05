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
      title: "🐥 삐약!",
      message: `예약한 ${drugName} 먹을 시간이에요!`,
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
