import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotiMes = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #3f4f3d;
`;

export const Notification = ({ message }) => {
  return <NotiMes>{message}</NotiMes>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
