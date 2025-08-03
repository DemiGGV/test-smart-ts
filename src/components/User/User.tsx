import { TUser } from '../../types/TUser';
import { TextField, UserItem } from './User.styled';

type UserProps = {
  userData: TUser;
};

export const User: React.FC<UserProps> = ({ userData }) => {
  const { id, name, username, email, phone } = userData;

  return (
    <UserItem>
      <TextField data-text={name}>{name}</TextField>
      <TextField data-text={username}>{username}</TextField>
      <TextField data-text={email}>{email}</TextField>
      <TextField data-text={phone}>{phone}</TextField>
    </UserItem>
  );
};
