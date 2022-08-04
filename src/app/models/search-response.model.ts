export interface SearchResponse {
  items: SearchResponseItem[];
}

interface SearchResponseItem {
  id: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

interface Thumbnails {
  default: {
    url: string;
  };
  standard: {
    url: string;
  };
}
