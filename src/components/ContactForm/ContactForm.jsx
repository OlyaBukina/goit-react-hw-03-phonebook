import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  ContactsForm,
  Label,
  FormButton,
  FormField,
  FormError,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too short name!')
    .required('Name is a required field!'),
  number: yup.string().required('Number is a required field!'),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const validateName = value => {
    let errorMessage;
    if (
      !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
    ) {
      errorMessage = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
    }
    return errorMessage;
  };

  const validateNumber = value => {
    let errorMessage;
    if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        value
      )
    ) {
      errorMessage = `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`;
    }
    return errorMessage;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <ContactsForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <FormField
            validate={validateName}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
          ></FormField>
          <FormError name="name" component="div" />
        </Label>

        <Label htmlFor="name">
          Number
          <FormField
            validate={validateNumber}
            type="tel"
            name="number"
            placeholder="123-45-67"
          ></FormField>
          <FormError name="number" component="div" />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </ContactsForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
