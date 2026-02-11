export class HttpError<TData = unknown> extends Error {
  status: number | null;
  data: TData | null;

  constructor(message: string, status: number | null, data: TData | null) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.data = data;
  }
}
