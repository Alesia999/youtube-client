import { VideoItemStatistics } from './video-item-statistics.model';

export interface SearchItem {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageUrlDetailed: string;
  channelTitle: string;
  statistics: VideoItemStatistics;
  tags: string[];
}
