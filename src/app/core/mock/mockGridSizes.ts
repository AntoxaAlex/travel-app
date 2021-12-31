import { GridData } from '../interfaces/grid-size.interface';

export const mockGridSizes: GridData = {
  XSmall: {
    cols: 1,
    rowHeight: '50px',
    gutterSize: '10px',
    gridItemsSize: [
      {
        colspan: 1,
        rowspan: 1,
      },
      {
        colspan: 1,
        rowspan: 9,
      },
      {
        colspan: 1,
        rowspan: 6,
      },
      {
        colspan: 1,
        rowspan: 6,
      },
      {
        colspan: 1,
        rowspan: 1,
      },
      {
        colspan: 1,
        rowspan: 3,
      },
      {
        colspan: 1,
        rowspan: 3,
      },
    ],
  },
  Small: {
    cols: 2,
    rowHeight: '50px',
    gutterSize: '10px',
    gridItemsSize: [
      {
        colspan: 2,
        rowspan: 1,
      },
      {
        colspan: 1,
        rowspan: 9,
      },
      {
        colspan: 1,
        rowspan: 5,
      },
      {
        colspan: 1,
        rowspan: 5,
      },

      {
        colspan: 2,
        rowspan: 1,
      },
      {
        colspan: 1,
        rowspan: 3,
      },
      {
        colspan: 1,
        rowspan: 3,
      },
    ],
  },
  Medium: {
    cols: 10,
    rowHeight: '8.4%',
    gutterSize: '10px',
    gridItemsSize: [
      {
        colspan: 10,
        rowspan: 1,
      },
      {
        colspan: 1,
        rowspan: 9,
      },
      {
        colspan: 3,
        rowspan: 6,
      },
      {
        colspan: 6,
        rowspan: 6,
      },
      {
        colspan: 9,
        rowspan: 1,
      },
      {
        colspan: 7,
        rowspan: 2,
      },
      {
        colspan: 2,
        rowspan: 2,
      },
    ],
  },
};
