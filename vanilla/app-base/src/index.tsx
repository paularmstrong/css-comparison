import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from '@vanilla/components';
import { themeClass } from '@vanilla/theme-base';
import { title } from './title.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className={themeClass}>
			<h1 className={title}>Vanilla Extract base theme</h1>
			<Button>button</Button>
		</div>
	</React.StrictMode>
);
