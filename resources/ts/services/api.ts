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

  static async deletePost(id: number) {
    const response = await fetch(`${window.baseUrl}/api/posts/${id}`, {
      method: 'delete',
      credentials: 'same-origin',
    });

    if (!response.status || response.status >= 400) {
      throw new APIError(response);
    }
  }

  static async voteForPost(id: number, score: number) {
    const response = await fetch(`${window.baseUrl}/api/votes`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post_id: id,
        score,
      }),
      credentials: 'same-origin',
    });

    if (!response.status || response.status >= 400) {
      throw new APIError(response);
    }

    return response.json();
  }
}
