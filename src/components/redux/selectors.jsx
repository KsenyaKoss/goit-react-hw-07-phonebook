export const selectContacts = state => state.contacts.contacts
export const selectFilter = state => state.contacts.filter

export const selectFilteredContacts = state => {
	const {items} = selectContacts(state)
	const filter = selectFilter(state)
	return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}