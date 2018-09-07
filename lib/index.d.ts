import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export interface SwitchProps extends RouteComponentProps<any> {
    children: React.ReactNode;
    className?: string;
    duration?: number;
}
declare const _default: React.ComponentClass<Pick<SwitchProps, "children" | "className" | "duration">, any>;
export default _default;
