import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CartContext } from "../../../services/cart/cart.context";

import { CartIconContainer, CartIcon, PayButton, ClearButton } from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, clearCart, sum } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>

        <Spacer position="top" size="large">        
        </Spacer>
        <Spacer position="top" size="xxl" />

        <PayButton
          //icon="cash-usd"
          mode="contained"
          
          onPress={() => { clearCart(),navigation.navigate("CheckoutSuccess")
          }
        }
        >
          Pay
        </PayButton>   

        <Spacer position="top" size="large">

          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
          </Spacer>

      </ScrollView>
    </SafeArea>
  );
};