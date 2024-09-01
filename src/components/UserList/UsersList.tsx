import { useAppSelector } from '../../Redux/redux-hooks';
import { getFilteredUsers } from '../../Redux/selectors';
import { TUser } from '../../types/TUser';
import { User } from '../User/User';
import { UsersListStyled } from './UsersList.styled';

export const UsersList = () => {
  const users = useAppSelector(getFilteredUsers);
  return (
    <UsersListStyled>
      {users.map(({ id, name, username, phone, email }: TUser) => (
        <User
          key={id}
          name={name}
          username={username}
          email={email}
          phone={phone}
        />
      ))}
    </UsersListStyled>
  );
};
