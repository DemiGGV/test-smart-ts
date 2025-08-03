import { useAppSelector } from '../../Redux/redux-hooks';
import { getFilteredUsers } from '../../Redux/selectors';
import { TUser } from '../../types/TUser';
import { User } from '../User/User';
import { UsersListStyled } from './UsersList.styled';

export const UsersList = () => {
  const users = useAppSelector(getFilteredUsers);
  return (
    <UsersListStyled>
      {users.map((user: TUser) => (
        <User key={user.id} userData={user} />
      ))}
    </UsersListStyled>
  );
};
