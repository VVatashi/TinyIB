export interface PostData {
  id: number;
  parent_id: number;
  name: string;
  tripcode: string;
  email: string;
  subject: string;
  file?: string;
  created_at: number;
}

export interface CreatePostRequest {
  parent: number;
  subject: string;
  name: string;
  message: string;
  captcha: string;
  file: File;
}

export interface CreatePostResponse {
  post: PostData,
  location: string;
}

export class Api {
  static async createPost(
    request: CreatePostRequest,
    onProgress?: (e: ProgressEvent) => any,
  ) {
    return new Promise<CreatePostResponse>((resolve, reject) => {
      const url = `${window.baseUrl}/ajax/post/create`;
      const data = new FormData();
      data.append('parent', request.parent.toString());
      data.append('subject', request.subject);
      data.append('name', request.name);
      data.append('message', request.message);
      data.append('file', request.file);
      data.append('captcha', request.captcha);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.withCredentials = true;

      if (onProgress) {
        xhr.upload.addEventListener('progress', onProgress.bind(this));
      }

      xhr.addEventListener('readystatechange', e => {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
          return;
        }

        if (xhr.status === 201) {
          resolve({
            post: JSON.parse(xhr.responseText),
            location: xhr.getResponseHeader('Location'),
          });
        } else {
          let message = '';
          try {
            const data = JSON.parse(xhr.responseText);
            message = data.error;
          } catch (e) {
            message = `${xhr.status} ${xhr.statusText}`;
          }

          reject(message);
        }
      });

      xhr.send(data);
    });
  }
}
