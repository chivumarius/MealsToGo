import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51JwTW7BwpUBC3co7evNpjDWPGS4YV0XiKdoz88jpMyQhuC06etVgnoOWU6jbU7nFrpiBJ4tdkl93SySyFRu6z1q700VZjGCTz1"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
