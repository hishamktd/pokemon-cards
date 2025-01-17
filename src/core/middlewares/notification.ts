import { toast } from 'react-hot-toast';
import { StateCreator } from 'zustand';

type NotificationConfig = {
  successMessage?: string;
  errorMessage?: string;
};

const withNotifications =
  <T extends object>(
    config: StateCreator<T>,
    notifications: Record<keyof T, NotificationConfig>,
  ): StateCreator<T> =>
  (set, get, api) =>
    config(
      (args) => {
        Object.keys(notifications).forEach((key) => {
          if (key in args) {
            const { successMessage, errorMessage } =
              notifications[key as keyof T];

            if ('error' in args && args.error && errorMessage) {
              toast.error(errorMessage);
            }

            if ('success' in args && args.success && successMessage) {
              toast.success(successMessage);
            }
          }
        });

        set(args);
      },
      get,
      api,
    );

export default withNotifications;
