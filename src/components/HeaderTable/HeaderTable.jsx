import { useDispatch, useSelector } from 'react-redux';
import {
  getEmailFilter,
  getNameFilter,
  getPhoneFilter,
  getUsernameFilter,
} from '../../Redux/selectors';
import { setFilter } from '../../Redux/filters/filtersSlice';
import {
  HeaderMenuWrapper,
  InputStyled,
  LabelStyled,
  PlaceHolderStyled,
} from './HeaderTable.styled';

export const HeaderTable = () => {
  const dispatch = useDispatch();

  const name = useSelector(getNameFilter);
  const username = useSelector(getUsernameFilter);
  const email = useSelector(getEmailFilter);
  const phone = useSelector(getPhoneFilter);

  const handleChange = (e) => {
    e.preventDefault;
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <HeaderMenuWrapper>
      <LabelStyled>
        <InputStyled
          placeholder=""
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="false"
        />
        <PlaceHolderStyled>name</PlaceHolderStyled>
      </LabelStyled>
      <LabelStyled>
        <InputStyled
          placeholder=""
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          autoComplete="false"
        />
        <PlaceHolderStyled>username</PlaceHolderStyled>
      </LabelStyled>
      <LabelStyled>
        <InputStyled
          placeholder=""
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="false"
        />
        <PlaceHolderStyled>email</PlaceHolderStyled>
      </LabelStyled>
      <LabelStyled>
        <InputStyled
          placeholder=""
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
          autoComplete="false"
        />
        <PlaceHolderStyled>phone</PlaceHolderStyled>
      </LabelStyled>
    </HeaderMenuWrapper>
  );
};
