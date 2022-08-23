export interface VideoResponse {
  items: VideoResponseItem[];
}

interface VideoResponseItem {
  snippet: {
    tags: string[];
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
