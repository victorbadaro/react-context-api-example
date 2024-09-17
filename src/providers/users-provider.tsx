import { User, UsersContext, UserToBeUpdated } from '@/contexts/users-context';
import { ReactNode, useState } from 'react';

interface UsersProviderProps {
	children: ReactNode;
}

export function UsersProvider({ children }: UsersProviderProps) {
	const [users, setUsers] = useState<User[]>([]);

	function addUser(user: UserToBeUpdated) {
		setUsers((prev) => [
			...prev,
			{
				id: prev.length + 1,
				name: user.name,
				email: user.email
			}
		]);
	}

	return (
		<UsersContext.Provider value={{ users, addUser }}>
			{children}
		</UsersContext.Provider>
	);
}
