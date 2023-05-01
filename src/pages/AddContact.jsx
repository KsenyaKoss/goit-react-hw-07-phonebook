import { addContact } from "redux/opereations";
import { selectContacts } from "redux/selectors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledInput , StyledLabel, StyledTitle, StyledButton } from "./AddContactsStyled";
export const AddContact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {items} = useSelector(selectContacts)

    const handleSubmit = (ev) => {
        ev.preventDefault()
    const existingContact = items.find(item => item.name === name || item.phone === phone)
       if(!existingContact) { dispatch(addContact({
            name: ev.target.elements.name.value,
            phone: ev.target.elements.phone.value
        }))
        ev.target.reset()
        navigate('/')    } else {
            alert(`${name} or ${phone} is already in contacts`)
            setName('')
            setPhone('')
        }
    }

    const handleInputChange = (ev)=> {
        if(ev.target.name === 'name'){setName(ev.target.value)}
        if(ev.target.name === 'phone'){setPhone(ev.target.value)}
    }

  return (
    <>
      <StyledTitle>Add Contact Form</StyledTitle>
      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Name
          <StyledInput type="text" name="name" value={name} onChange={handleInputChange}/>
        </StyledLabel>
        <StyledLabel>
          Phone
          <StyledInput type="text" name="phone" value={phone} onChange={handleInputChange}/>
        </StyledLabel>
        <StyledButton disabled={!name || !phone}>Add Contact</StyledButton>
      </form>
    </>
  );
};
