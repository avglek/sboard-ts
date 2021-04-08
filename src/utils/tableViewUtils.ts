import { IColunm } from "../types/tableViewType";

export const calcWidths = (size: number, lenDev: number, cols: IColunm[]) => {
  const ret = cols.map((item, index) => {
    if (index === 0) {
      return 0;
    } else {
      if (!item.width) {
        return lenDev;
      } else {
        return item.width;
      }
    }
  });

  const sumWidth = ret.reduce((sum, current) => sum + current);

  if (cols[0].width) {
    ret[0] = cols[0].width;
  } else {
    ret[0] = size - 2 - sumWidth;
  }

  return ret;
};
