import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';

import './index.css';
import { UsersProvider } from './providers/users-provider.tsx';

const container = document.getElementById('root');

createRoot(container!).render(
	<UsersProvider>
		<App />
	</UsersProvider>
);
