export interface CoubData {
  image_versions: {
    template: string;
  };

  permalink: string;
  title: string;

  dimensions: {
    big: number[];
  };
};

export class Coub {
  static async getData(coubId: string) {
    const url = `https://coub.com/api/v2/coubs/${coubId}`;
    const dataUrl = `${window.baseUrl}/api/embed?url=${encodeURIComponent(url)}`;
    const response = await fetch(dataUrl, {
      credentials: 'same-origin',
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return await response.json() as CoubData;
  }

  static async getHtml(coubUrl: string, autoPlay: boolean = true) {
    const baseUrl = 'https://coub.com/api/oembed.json';
    const oEmbedUrl = `${baseUrl}?url=${encodeURIComponent(coubUrl)}${autoPlay ? '&autoplay=true' : ''}`;
    const url = `${window.baseUrl}/api/embed?url=${encodeURIComponent(oEmbedUrl)}`;
    const response = await fetch(url, {
      credentials: 'same-origin',
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const json = await response.json();
    return json.html.replace('muted=true', 'muted=false')
      .replace(/width="\d+"/i, 'width="100%"')
      .replace(/height="\d+"/i, 'height="100%"');
  }
}
