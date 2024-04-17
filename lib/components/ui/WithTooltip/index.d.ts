import React from 'react';
export type ToolTipPositionType = 'top' | 'bottom' | 'right' | 'left';
export interface Tooltipable {
    ['data-tooltip']?: boolean;
    ['data-tooltip-position']?: ToolTipPositionType;
    tooltipContainerId?: string;
    tooltipContent?: React.ReactNode;
}
export interface ToolTipProps {
    label?: string;
    tooltipContent?: React.ReactNode;
    tooltipPosition?: ToolTipPositionType;
}
export declare const WithTooltip: <P extends object>(Component: React.ComponentType<React.PropsWithChildren<P>>, container_id?: string) => (props: P & ToolTipProps) => React.JSX.Element;
