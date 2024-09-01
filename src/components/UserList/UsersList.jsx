import { useSelector } from 'react-redux';
import { getFilteredUsers } from '../../Redux/selectors';
import { User } from '../User/User';
import { UsersListStyled } from './UsersList.styled';

export const UsersList = () => {
  const users = useSelector(getFilteredUsers);
  return (
    <UsersListStyled>
      {users.map(({ id, name, username, phone, email }) => (
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
