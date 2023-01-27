import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from '@uno/components';
import 'uno.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<h1 className="font-sans text-3xl font-bold text-primary-500">Uno base theme</h1>
		<Button>button</Button>
	</React.StrictMode>
);
