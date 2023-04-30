import { deleteContact, fetchAsyncContacts } from 'components/redux/opereations';
import { selectFilteredContacts  } from 'components/redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/contactsSlice';
import { StyledDiv, StyledSearchInput, StyledTitle, StyledLi, StyledP, StyledSpan  } from './StyledHomePage';


export const HomePage = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchAsyncContacts());
  }, [dispatch]);

  
  return (
    <>
    <StyledDiv>
        <StyledTitle >Find contacts by Name</StyledTitle>
        <StyledSearchInput type="text" onChange={(ev)=>dispatch(setFilter(ev.target.value))} />
    </StyledDiv>
    <StyledDiv>
    <StyledTitle >Contacts</StyledTitle>
      <ul>
        {filteredContacts.map(({ name, phone, id }) => {
          return (
            <StyledLi key={id}>
              <StyledP>{name}  <StyledSpan>{phone}</StyledSpan> </StyledP>
              <button onClick={()=>dispatch(deleteContact(id))}>Delete contact</button>
            </StyledLi>
          );
        }).reverse()}
      </ul>
    </StyledDiv>
     
    </>
  );
};
