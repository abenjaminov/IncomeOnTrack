import React from "react";
import clsx from "clsx";
import {arrowPicker, arrowPickerArrow, arrowPickerSelectedItemLabel} from "./arrow-picker.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export type ArrowPickerItem<T> = {
  id: T,
  label: string
}

type ArrowPickerProps<T> = {
  items: ArrowPickerItem<T>[],
  defaultItem: ArrowPickerItem<T>,
  onItemChange?: (item: ArrowPickerItem<T>) => void
} & React.ComponentProps<'div'>

export function ArrowPicker<T>({items, className,defaultItem,onItemChange, ...divProps}: ArrowPickerProps<T>) {
  const [selectedItem, setSelectedItem] = React.useState<ArrowPickerItem<T>>(defaultItem);

  const selectedItemIndex = items.findIndex(item => item.id === selectedItem.id);

  if(selectedItemIndex === -1)  {
    throw new Error(`Invalid selected item: ${JSON.stringify(selectedItem, null,2)}`);
  }

  const onItemChangeInternal = (newItemIndex: number) => {
    const newItem = items[newItemIndex];
    setSelectedItem(newItem);
    onItemChange?.(newItem);
  }

  return <div {...divProps} className={clsx(className, arrowPicker)}>
    {selectedItemIndex === 0 && <div className={arrowPickerArrow}></div>}
    {selectedItemIndex > 0 && <KeyboardArrowLeftIcon className={arrowPickerArrow} onClick={() => onItemChangeInternal(selectedItemIndex - 1)}/>}
    <div className={arrowPickerSelectedItemLabel}>{selectedItem.label}</div>
    {selectedItemIndex < items.length - 1 && <KeyboardArrowRightIcon onClick={() => onItemChangeInternal(selectedItemIndex + 1)} className={arrowPickerArrow}/>}
    {selectedItemIndex === items.length - 1 && <div className={arrowPickerArrow}></div>}
  </div>
}
