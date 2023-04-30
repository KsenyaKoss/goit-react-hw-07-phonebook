import { deleteContact, fetchAsyncContacts } from 'components/redux/opereations';
import { selectFilteredContacts  } from 'components/redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/contactsSlice';


export const HomePage = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchAsyncContacts());
  }, [dispatch]);

  
  return (
    <>
    <div>
        <h3>Find contacts by Name</h3>
        <input type="text" onChange={(ev)=>dispatch(setFilter(ev.target.value))} />
    </div>
      <p>Contacts</p>
      <ul>
        {filteredContacts.map(({ name, phone, id }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <span>{phone}</span>
              <button onClick={()=>dispatch(deleteContact(id))}>Delete contact</button>
            </li>
          );
        }).reverse()}
      </ul>
    </>
  );
};
