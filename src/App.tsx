import { useEffect } from 'react';
import { HeaderTable } from './components/HeaderTable/HeaderTable';
import { UsersList } from './components/UserList/UsersList';
import { fetchUsers } from './Redux/users/usersOperations.js';
import { MainSection, TitleStyled } from './App.styled.jsx';
import { useAppDispatch } from './Redux/redux-hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <MainSection>
      <TitleStyled>Filters:</TitleStyled>
      <HeaderTable />
      <UsersList />
    </MainSection>
  );
};

export default App;
