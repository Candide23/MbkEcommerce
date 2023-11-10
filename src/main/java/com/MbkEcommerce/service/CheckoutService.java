package com.MbkEcommerce.service;

import com.MbkEcommerce.dto.Purchase;
import com.MbkEcommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
