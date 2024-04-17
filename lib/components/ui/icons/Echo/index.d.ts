import React from 'react';
import { SvgProps } from '../Svg';
interface EchoProps extends SvgProps {
    muted?: boolean;
    poorConnection?: boolean;
}
export declare const Echo: React.FC<React.PropsWithChildren<EchoProps>>;
export default Echo;
