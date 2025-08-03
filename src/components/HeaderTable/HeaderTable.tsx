import { useAppDispatch, useAppSelector } from '../../Redux/redux-hooks';
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
  const dispatch = useAppDispatch();

  const name = useAppSelector(getNameFilter);
  const username = useAppSelector(getUsernameFilter);
  const email = useAppSelector(getEmailFilter);
  const phone = useAppSelector(getPhoneFilter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value.trim() }));
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
