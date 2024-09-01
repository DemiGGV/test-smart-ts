import { TextField, UserItem } from './User.styled';

export const User = ({ name, username, email, phone }) => {
  return (
    <UserItem>
      <TextField>{name}</TextField>
      <TextField>{username}</TextField>
      <TextField>{email}</TextField>
      <TextField>{phone}</TextField>
    </UserItem>
  );
};
