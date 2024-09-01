import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HeaderTable } from "./components/HeaderTable/HeaderTable";
import { UsersList } from "./components/UserList/UsersList";
import { fetchUsers } from "./Redux/users/usersOperations.js";
import { MainSection } from './App.styled.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <MainSection>
      <HeaderTable />
      <UsersList />
    </MainSection>
  );
}

export default App;
