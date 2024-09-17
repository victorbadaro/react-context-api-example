import { createContext } from 'react';

export type User = {
	id: number;
	name: string;
	email: string;
}

export type UserToBeUpdated = Omit<User, 'id'>;

interface UsersContext {
	users: User[];
	addUser: (userToBeUpdated: UserToBeUpdated) => void;
}

export const UsersContext = createContext<UsersContext>({} as UsersContext);
