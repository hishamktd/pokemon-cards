import { isFulfilled, isRejected, Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import API_STATUS_CODE from '@/constants/common/api-status-code';
import { Any } from '@/types';

const notificationMiddleware: Middleware =
  (store) => (next) => (action: Any) => {
    const { type } = action;
    const { getState } = store;

    next(action);

    const toastId = 'notification-toast';

    if (isFulfilled(action)) {
      const getType = type?.split('/');
      const currentState = getState()[getType[0]];
      const successMessage = currentState?.successMessage;

      if (successMessage) {
        toast.success(successMessage, { id: toastId });
      }
    }

    if (isRejected(action)) {
      const getType = type?.split('/');
      const currentState = getState()[getType[0]];
      const errorKey = currentState?.errorMessage;

      const errorMessages: Record<string, string> = {
        [`serverErrorWithStatusCode:${API_STATUS_CODE.PAGE_NOT_FOUND}`]:
          'pageNotFound',
        [`serverErrorWithStatusCode:${API_STATUS_CODE.ACCESS_DENIED}`]:
          'accessDenied',
        [`serverErrorWithStatusCode:${API_STATUS_CODE.AUTHORIZATION_ERROR}`]:
          'permissionDenied',
        [`serverErrorWithStatusCode:${API_STATUS_CODE.BAD_REQUEST}`]:
          'unexpectedError',
        'Network Error': 'Network Error',
        [`serverErrorWithStatusCode:${API_STATUS_CODE.SERVER_ERROR}`]:
          'unexpectedError',
      };

      const errorMessage = errorMessages[errorKey] || errorKey;

      if (errorMessage) {
        toast.error(errorMessage, { id: toastId });
      }
    }
    return next(action);
  };

export default notificationMiddleware;
