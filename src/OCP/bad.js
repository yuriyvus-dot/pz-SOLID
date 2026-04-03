class NotificationService {
    send(message, type) {
        if (type === 'email') {
            console.log("Email send");
        }
        else if (type === 'sms') {
            console.log("SMS send");
        }
    }
}
const notificator = new NotificationService();
notificator.send("Hello!", 'sms');
export {};
//# sourceMappingURL=bad.js.map