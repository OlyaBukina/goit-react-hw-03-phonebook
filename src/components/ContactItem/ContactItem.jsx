import PropTypes from 'prop-types';

import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
