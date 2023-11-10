package com.MbkEcommerce.dto;

import com.MbkEcommerce.entity.Address;
import com.MbkEcommerce.entity.Customer;
import com.MbkEcommerce.entity.Order;
import com.MbkEcommerce.entity.OrderItem;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Data
@Getter
@Setter
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
