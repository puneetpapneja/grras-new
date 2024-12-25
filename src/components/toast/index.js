import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE_TYPE, TIMEOUT } from 'utils/constants';
import { setToastMsg } from 'store/reducers/toastSlice';
import { Alert } from '@mui/material';

const Toast = () => {
  const toastProps = useSelector((state) => state?.toast);
  const dispatch = useDispatch();

  const { title, role, caption, subtitle, kind } = toastProps;
  if (!kind && !title && !subtitle) {
    return null;
  } else {
    window.scrollTo(0, 0);
  }

  const handleClose = () => {
    dispatch(
      setToastMsg({
        kind: '',
        title: '',
        subtitle: ''
      })
    );
  };

  return (
    <Alert
      className="width-100 mt-3"
      role={role || ROLE_TYPE.STATUS}
      caption={caption}
      timeout={TIMEOUT}
      title={title}
      subtitle={subtitle}
      kind={kind}
      onClose={handleClose}
    />
  );
};

export default Toast;
