import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import { UsersProvider } from './providers/users-provider.tsx';

import './index.css';

const container = document.getElementById('root');

createRoot(container!).render(
	<UsersProvider>
		<App />
	</UsersProvider>
);
