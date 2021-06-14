import { Target } from '..';

export interface Placement {
  id: string;
  name: string;
  archivedAt: string;
  targets: Target[];
  storeName: number;
  adUnitId: string;
  gameId: number;
}
