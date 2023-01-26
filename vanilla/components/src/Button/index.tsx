import * as React from 'react';
import { buttonClassname } from './button.css';

export function Button({ children }: { children: React.ReactNode }) {
	return <button className={buttonClassname}>{children}</button>;
}
