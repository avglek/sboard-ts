export interface IColunm {
  cell?: (row: any, index: number, column: IColunm) => JSX.Element;
  selector: string;
  name: string;
  wrap: boolean;
  width?: number;
  right: boolean;
  center: boolean;
}

export interface IParams {
  name: string;
  width?: number;
  align?: string;
}
