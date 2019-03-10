import { PostData } from './model';

export interface CreatePostRequest {
  parent: number;
  subject: string;
  name: string;
  message: string;
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
          const data = JSON.parse(xhr.responseText);
          if (data && data.error) {
            reject(data.error);
          } else {
            reject(`${xhr.status} ${xhr.statusText}`);
          }
        }
      });

      xhr.send(data);
    });
  }
}
