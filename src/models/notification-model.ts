import { Schema, Document, Types, model, Model } from "mongoose";

interface INotification {
    _id: Types.ObjectId;
    user: Types.ObjectId; // User ID who will receive the notification
    message: string; // Notification message
    isRead: boolean; // Whether the notification has been read
}

type INotificationModelMethods = {};
export type INotificationModel = Model<
    INotification,
    {},
    INotificationModelMethods
>;

const notificationSchema = new Schema<
    INotification,
    INotificationModel,
    INotificationModelMethods
>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: { type: String, required: true },
        isRead: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Notification = model<INotification, INotificationModel>(
    "Notification",
    notificationSchema
);

export default Notification;
