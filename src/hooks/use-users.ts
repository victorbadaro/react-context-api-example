import { UsersContext } from '@/contexts/users-context';
import { useContext } from 'react';

export function useUsers() {
	const context = useContext(UsersContext);

	return context;
}
