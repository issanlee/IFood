import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict RM9.90" 
          onPress={() => {
            addToCart({ item: "Eggs Benedict", price: 990 }, restaurant);
            navigation.navigate("Checkout");
          }}/>
         
          
          <Divider />
          <List.Item title="Classic Breakfast RM11.90" 
          onPress={() => {
            addToCart({ item: "Classic Breakfast", price: 1190 }, restaurant);
            navigation.navigate("Checkout");
          }}/>
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries RM12.90" 
          onPress={() => {
            addToCart({ item: "Burger w/ Fries", price: 1290 }, restaurant);
            navigation.navigate("Checkout");
          }} />
          <Divider />
          <List.Item title="Steak Sandwich RM9.90" 
          onPress={() => {
            addToCart({ item: "Steak Sandwich", price: 990 }, restaurant);
            navigation.navigate("Checkout");
          }} />
          <Divider />
          <List.Item title="Mushroom Soup RM8.90"  
          onPress={() => {
            addToCart({ item: "Mushroom Soup", price: 890 }, restaurant);
            navigation.navigate("Checkout");
          }}/>
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese RM12.90" 
          onPress={() => {
            addToCart({ item: "Spaghetti Bolognese", price: 1290 }, restaurant);
            navigation.navigate("Checkout");
          }} />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini RM13.90" 
          onPress={() => {
            addToCart({ item: "Veal Cutlet with Chicken Mushroom Rotini", price: 1390 }, restaurant);
            navigation.navigate("Checkout");
          }} />
          <Divider />
          <List.Item title="Steak Frites RM14.90"  
          onPress={() => {
            addToCart({ item: "Steak Frites", price: 1490 }, restaurant);
            navigation.navigate("Checkout");
          }}/>
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee RM5.00"  
          onPress={() => {
            addToCart({ item: "Coffee", price: 500 }, restaurant);
            navigation.navigate("Checkout");
          }}/>
          <Divider />
          <List.Item title="Tea RM5.00" 
          onPress={() => {
            addToCart({ item: "Tea", price: 500 }, restaurant);
            navigation.navigate("Checkout");
          }} />
          <Divider />
          <List.Item title="Modelo RM5.00"  
          onPress={() => {
            addToCart({ item: "Modelo", price: 500 }, restaurant);
            navigation.navigate("Checkout");
          }}/>
          <Divider />
          <List.Item title="Coke RM4.00" 
          onPress={() => {
            addToCart({ item: "Coke", price: 400 }, restaurant);
            navigation.navigate("Checkout");
          }} />
          <Divider />         
          <List.Item title="Fanta RM4.00"  
          onPress={() => {
            addToCart({ item: "Fanta", price: 400 }, restaurant);
            navigation.navigate("Checkout");
          }}/>
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
       
        <OrderButton
          //icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>

      </Spacer>
    </SafeArea>
  );
};
