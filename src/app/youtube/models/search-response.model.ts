export interface SearchResponse {
  items: SearchResponseItem[];
}

interface SearchResponseItem {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
  };
}

interface Thumbnails {
  default: {
    url: string;
  };
  high: {
    url: string;
  };
}
