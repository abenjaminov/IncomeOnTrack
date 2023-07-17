import React from "react";
import clsx from "clsx";
import {
  percentageVar,
  progress,
  progressWithText,
  progressText
} from "@shared/components/progress-with-text/progress-with-text.css";
import { assignInlineVars } from '@vanilla-extract/dynamic';

type ProgressWithTextProps = {
  text: string,
  percentage: number,
} & React.ComponentProps<'div'>

export const ProgressWithText: React.FC<ProgressWithTextProps> = ({children, className,percentage,text, ...divProps}) => {
  return <div {...divProps} className={clsx(className, progressWithText)}>
    <div className={progress} style={assignInlineVars({
      [percentageVar]: `${percentage}%`
    })}></div>
    <div className={progressText}>
      {text}
    </div>
  </div>
}
