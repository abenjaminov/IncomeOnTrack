import {ArrowPickerItem} from "@shared/components";
import { getYear } from 'date-fns';

const thisYear = getYear(new Date());
export const YearItems: ArrowPickerItem<number>[] = [{
    label: (thisYear - 1).toString(),
    id: thisYear - 1
},{
    label: thisYear.toString(),
     id: thisYear
  }
]

export const ThisYearItem = YearItems[1];

export const MonthItems: ArrowPickerItem<number>[] = [{
  label: 'January',
  id: 0
},{
  label: 'February',
  id: 1
}, {
  label: 'March',
  id: 2
}, {
  label: 'April',
  id: 3
}, {
  label: 'May',
  id: 4
}, {
  label: 'June',
  id: 5
}, {
  label: 'July',
  id: 6
}, {
  label: 'August',
  id: 7
}, {
  label: 'September',
  id: 8
}, {
  label: 'October',
  id: 9
}, {
  label: 'November',
  id: 10
}, {
  label: 'December',
  id: 11
}]
