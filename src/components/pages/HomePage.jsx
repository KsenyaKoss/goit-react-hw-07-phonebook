import { fetchAsyncContacts } from 'components/redux/opereations';
import { selectContacts  } from 'components/redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const HomePage = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchAsyncContacts());
  }, [dispatch]);

  
  return (
    <>
      <p>Contacts</p>
      <ul>
        {items.map(({ name, phone, id }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <span>{phone}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
