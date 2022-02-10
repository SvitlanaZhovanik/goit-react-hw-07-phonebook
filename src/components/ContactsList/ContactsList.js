import { List } from './ContactsList.styled';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import PuffLoader from 'react-spinners/PuffLoader';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';

const ContactsList = ({ contacts, error, isFetching, isError }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const contactsNormalize = getVisibleContacts();
  const handleDeleteContact = event => {
    deleteContact(event.currentTarget.id);
  };
  return (
    <div>
      {isFetching && <PuffLoader color="#32a1ce" />}
      {isError && <p> {error.data} Sorry, something went wrong. Try later</p>}
      {contacts && !isFetching && !isError && (
        <List>
          {contactsNormalize.map(({ id, name, phone }) => {
            return (
              <ContactItem
                onClick={handleDeleteContact}
                deleting={isDeleting}
                key={id}
                id={id}
                name={name}
                number={phone}
              />
            );
          })}
        </List>
      )}
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
