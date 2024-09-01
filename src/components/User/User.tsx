import { TextField, UserItem } from './User.styled';

interface IUserProps {
  name: string,
  username: string,
  email: string,
  phone: string
}

export const User = ({ name, username, email, phone }: IUserProps) => {
  return (
    <UserItem>
      <TextField>{name}</TextField>
      <TextField>{username}</TextField>
      <TextField>{email}</TextField>
      <TextField>{phone}</TextField>
    </UserItem>
  );
};
