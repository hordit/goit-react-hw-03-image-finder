import PropTypes from 'prop-types';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { DivLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <DivLoader>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#087a27"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        speed={0.3}
      />
    </DivLoader>
  );
};

Loader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  wrapperStyle: PropTypes.object,
  wrapperClassName: PropTypes.string,
  visible: PropTypes.bool,
};
