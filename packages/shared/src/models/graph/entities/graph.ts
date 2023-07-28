import {GraphType} from "../../../enums/graph";

export type IGraphDataItemBase = {
  label: string;
}

export type IPaymentPerMonthGraphDataItem = IGraphDataItemBase & {
  month: number;
  year: number;
  payment: number;
}

export type IPaymentPerMonthGraphData = {
  type: GraphType.paymentPerMonth;
  items: Array<IPaymentPerMonthGraphDataItem>
}


export type IGraphData = IPaymentPerMonthGraphData

export type IGraph = {
  name: string;
  data: IGraphData;
}
