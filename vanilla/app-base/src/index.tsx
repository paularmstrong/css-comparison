import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from '@cssoptions/vanilla-components';
import { themeClass } from '@cssoptions/vanilla-theme-base';
import { title } from './title.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className={themeClass}>
			<h1 className={title}>hello base</h1>
			<Button>tacos</Button>
		</div>
	</React.StrictMode>
);
