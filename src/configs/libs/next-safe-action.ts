import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from 'next-safe-action';

export class ServerActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError: (error) => {
    if (error instanceof ServerActionError) {
      return error.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});
