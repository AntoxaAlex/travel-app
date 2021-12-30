export interface GridData {
  XSmall: GridSize;
  Small: GridSize;
  Medium: GridSize;
}

export interface GridSize {
  cols: number;
  rowHeight: string | number;
  gutterSize: string;
  gridItemsSize: GridItemSize[];
}

export interface GridItemSize {
  colspan: number;
  rowspan: number;
}
