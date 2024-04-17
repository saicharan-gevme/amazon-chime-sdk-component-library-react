import React from 'react';
import { SvgProps } from '../Svg';
interface SoundProps extends SvgProps {
    /** Whether or not should show a sound off icon. */
    disabled?: boolean;
}
export declare const Sound: React.FC<React.PropsWithChildren<SoundProps>>;
export default Sound;
