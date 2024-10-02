import { createContext } from 'react';

export type User = {
	id: number;
	name: string;
	email: string;
}

export type UserToBeAdded = Omit<User, 'id'>;

interface UsersContext {
	users: User[];
	addUser: (userToBeAdded: UserToBeAdded) => void;
}

export const UsersContext = createContext<UsersContext>({} as UsersContext);
