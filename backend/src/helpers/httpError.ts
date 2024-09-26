export interface HttpError extends Error {
  status?: number;
}

const errorMessageList: Record<number, string> = {
  401: 'Not authorized',
};

export const httpError = (
  status: number,
  message: string = errorMessageList[status]
): HttpError => {
  const error = new Error(message) as HttpError;
  error.status = status;
  return error;
};
