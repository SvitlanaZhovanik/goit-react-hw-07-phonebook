import { Label, Input } from '../Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => dispatch(filterContact(e.currentTarget.value));
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        placeholder="Please enter the required name"
        value={filter}
        onChange={handleFilter}
      />
    </Label>
  );
};
export default Filter;
