export class APIError extends Error {
  constructor(readonly response: Response) {
    super(response.statusText);
  }
}

export class API {
  static async getThreadPostsHtml(threadId: number, afterId: number = 0) {
    const response = await fetch(`${window.baseUrl}/ajax/thread/${threadId}?after=${afterId}`, {
      credentials: 'same-origin',
    });

    if (response.status !== 200) {
      throw new APIError(response);
    }

    return response.text();
  }
}
