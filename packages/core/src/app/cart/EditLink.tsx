import React, { FunctionComponent, memo } from 'react';

import { TranslatedString } from '@bigcommerce/checkout/locale';

export interface EditLinkProps {
    className?: string;
    url?: string;
}

const usmCartLink = 'https://spikes-shop-next.app.nonprod.usmobile.com/shopnext/cart';

const EditLink: FunctionComponent<EditLinkProps> = ({ className }) => (
    <a
        className={className || 'cart-header-link'}
        data-test="cart-edit-link"
        href={usmCartLink}
        id="cart-edit-link"
        target="_top"
    >
        <TranslatedString id="cart.edit_cart_action" />
    </a>
);

export default memo(EditLink);
