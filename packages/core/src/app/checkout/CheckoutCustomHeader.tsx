import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

const CheckoutCustomHeader: FunctionComponent = () => (
  <div className={classNames('customHeader')}>
    <div className={classNames( 'customHeaderWrapper')}>
      <h1 className="customHeaderHeading">US Mobile - Affirm checkout</h1>
    </div>
  </div>
);

export default CheckoutCustomHeader;
