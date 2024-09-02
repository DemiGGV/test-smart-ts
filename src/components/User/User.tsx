import { TextField, UserItem } from './User.styled';

interface IUserProps {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const User = ({ name, username, email, phone }: IUserProps) => {
  return (
    <UserItem>
      <TextField data-text={name}>{name}</TextField>
      <TextField data-text={username}>{username}</TextField>
      <TextField data-text={email}>{email}</TextField>
      <TextField data-text={phone}>{phone}</TextField>
    </UserItem>
  );
};
