import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactsForm = styled(Form)`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid #96ac92;
  border-radius: 20px;
  padding: 15px 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormButton = styled.button`
  height: 45px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  background-color: #96ac92;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const FormField = styled(Field)`
  padding: 5px;
`;

export const FormError = styled(ErrorMessage)`
  color: #cb0000;
  font-size: 14px;
`;
