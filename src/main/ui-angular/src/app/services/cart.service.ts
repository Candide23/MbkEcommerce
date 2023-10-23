import { Injectable, untracked } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();



  constructor() { }


  addToCart(theCartItem: CartItem){

    // check if we already have the item in our cart

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;



    if(this.cartItems.length > 0 ){              
    // find the item in the cart based on item id

    existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      // check if we found it
      alreadyExistsInCart = (existingCartItem != undefined);
    
  }

  

    if(alreadyExistsInCart) {
      // increment the quantity
      existingCartItem.quantity++;
    } 
    else {
      // just add the item to the array
      this.cartItems.push(theCartItem);
    }

    // compute car total price and total quqntity
    this.computeCartTotals();

  }

  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;


    for(let currentCartItem of this.cartItems)  {

      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscriber will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes

    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantity: number) {

    console.log('Contents of the cart');
    for(let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);

      console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantity}`);
      console.log('-----')

    }

  }

  decrementQuantity(theCartItem: CartItem) {

    theCartItem.quantity--;

    if(theCartItem.quantity === 0) {

      this.remove(theCartItem);
    } else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {

    // get index of item in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    // if found, remove the item from array at the given idex

    if(itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
}
