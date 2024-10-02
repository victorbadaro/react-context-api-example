import { User, UsersContext, UserToBeAdded } from '@/contexts/users-context';
import { ReactNode, useState } from 'react';

interface UsersProviderProps {
	children: ReactNode;
}

export function UsersProvider({ children }: UsersProviderProps) {
	const [users, setUsers] = useState<User[]>([]);

	function addUser(userToBeAdded: UserToBeAdded) {
		setUsers((prev) => [
			...prev,
			{
				id: prev.length + 1,
				name: userToBeAdded.name,
				email: userToBeAdded.email
			}
		]);
	}

	return (
		<UsersContext.Provider value={{ users, addUser }}>
			{children}
		</UsersContext.Provider>
	);
}
