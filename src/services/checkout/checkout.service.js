import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51M01WNC57mFpxwZDuITea1uMtFuBGfu98j24j1r7zJvsR4UN1SvH0LstCbZUJ7ugr8w6vWaUXXDrWE0jXWac1yUn00ZwmmJl1s"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });