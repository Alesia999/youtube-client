import { SearchItemStatistics } from './search-item-statistics.model';

export interface SearchItem {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  statistics: SearchItemStatistics;
}
