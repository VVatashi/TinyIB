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

export async function getCoubData(coubId: string) {
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

export async function getCoubHtml(coubUrl: string) {
  const oEmbedUrl = `https://coub.com/api/oembed.json?url=${encodeURIComponent(coubUrl)}&autoplay=true`;
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
