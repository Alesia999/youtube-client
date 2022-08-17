import { VideoItemStatistics } from './video-item-statistics.model';

export interface VideoItem {
  tags: string[];
  statistics: VideoItemStatistics;
}
