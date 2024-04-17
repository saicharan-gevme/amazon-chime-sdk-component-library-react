import React, { FC } from 'react';
import { SvgProps } from '../Svg';
export type CautionVariant = 'default' | 'fill-warning' | 'fill-error';
export interface CautionProps extends SvgProps {
    /** toggle the range of visual variants */
    variant?: CautionVariant;
}
export declare const Caution: FC<React.PropsWithChildren<CautionProps>>;
export default Caution;
