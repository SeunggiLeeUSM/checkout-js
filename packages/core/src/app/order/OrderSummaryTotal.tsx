// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FunctionComponent, useEffect } from 'react';

import { TranslatedString, withCurrency, WithCurrencyProps } from '@bigcommerce/checkout/locale';

import OrderSummaryPrice from './OrderSummaryPrice';

export interface OrderSummaryTotalProps {
  orderAmount: number;
  shopperCurrencyCode: string;
  storeCurrencyCode: string;
}

const OrderSummaryTotal: FunctionComponent<OrderSummaryTotalProps & WithCurrencyProps> = ({
  shopperCurrencyCode,
  storeCurrencyCode,
  orderAmount,
  currency,
}) => {
  const hasDifferentCurrency = shopperCurrencyCode !== storeCurrencyCode;
  const label = (
    <>
      {hasDifferentCurrency ? (
        <TranslatedString id="cart.estimated_total_text" />
      ) : (
        <TranslatedString id="cart.total_text" />
      )}
      {` (${shopperCurrencyCode})`}
    </>
  );

  const affirmPrice = orderAmount * 100;

  useEffect(() => {
    if (window) {
      window.affirm.ui.ready(function affirmRefreshFunction() {
        window.affirm.ui.refresh();
      });
    }
  }, [affirmPrice]);

  return (
    <>
      <OrderSummaryPrice
        amount={orderAmount}
        className="cart-priceItem--total"
        label={label}
        superscript={hasDifferentCurrency ? '*' : undefined}
        testId="cart-total"
      />
      {hasDifferentCurrency && currency && (
        <p className="cart-priceItem--totalNote" data-test="cart-price-item-total-note">
          <TranslatedString
            data={{
              total: currency.toStoreCurrency(orderAmount),
              code: storeCurrencyCode,
            }}
            id="cart.billed_amount_text"
          />
        </p>
      )}
      <p className="affirm-as-low-as" data-page-type="checkout" data-amount={affirmPrice} />
    </>
  );
};

export default withCurrency(OrderSummaryTotal);
