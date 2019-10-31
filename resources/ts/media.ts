export type MediaType = 'image' | 'audio' | 'video' | 'youtube' | 'coub';

export interface Media {
  readonly type: MediaType;
  readonly url: string;
  readonly width: number;
  readonly height: number;
}
