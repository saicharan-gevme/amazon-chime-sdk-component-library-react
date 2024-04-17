import React from 'react';
export interface RosterNameProps {
    name: string;
    subtitle?: string;
}
declare const RosterName: ({ name, subtitle }: RosterNameProps) => React.JSX.Element;
export default RosterName;
