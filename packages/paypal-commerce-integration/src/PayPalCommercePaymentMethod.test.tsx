import { createCheckoutService, LanguageService } from '@bigcommerce/checkout-sdk';
import { render } from '@testing-library/react';
import React from 'react';

import { PaymentFormService } from '@bigcommerce/checkout/payment-integration-api';

import { getPayPalCommerceMethod } from './mocks/paymentMethods.mock';
import PayPalCommercePaymentMethod from './PayPalCommercePaymentMethod';


describe('PayPalCommercePaymentMethod', () => {
    const checkoutService = createCheckoutService();
    const checkoutState = checkoutService.getState();
    const props = {
        method: getPayPalCommerceMethod(),
        checkoutService,
        checkoutState,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        paymentForm: jest.fn() as unknown as PaymentFormService,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        language: { translate: jest.fn() } as unknown as LanguageService,
        onUnhandledError: jest.fn(),
    };

    it('renders component with provided props', () => {
        const { container } = render(<PayPalCommercePaymentMethod {...props} />);

        expect(container).toMatchSnapshot();
    });
});
