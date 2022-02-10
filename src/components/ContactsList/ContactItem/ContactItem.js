import PropTypes from 'prop-types';
import { FcCellPhone, FcEmptyTrash } from 'react-icons/fc';
import { Item, Name, Button } from './ContactItem.styled';
import HashLoader from 'react-spinners/HashLoader';

const ContactItem = ({ id, name, number, onClick, deleting }) => {
  return (
    <Item>
      <FcCellPhone size="22px" /> <Name>{name}:</Name> {number}
      <Button id={id} onClick={onClick}>
        {deleting ? (
          <HashLoader color="#32a1ce" size={10} />
        ) : (
          <FcEmptyTrash size="22px" />
        )}
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactItem;
