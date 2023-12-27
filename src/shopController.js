import profileController from "./profileController";


const helpers = {
  async checkout(shoppingCart) {
    const user = await profileController.getCurrentUser();
    const response = await fetch(
      "https://ult7rjx11i.execute-api.eu-north-1.amazonaws.com/api/create-checkout-session", // DEV!!!
      //"https://6j2f2a91be.execute-api.eu-north-1.amazonaws.com/api/create-checkout-session", // PROD
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: shoppingCart,
          baseUrl: window.location.origin,
          email: user.email,
        }),
      }
    );
    const jsonBody = await response.json();
    const redirectUri = jsonBody.redirect_url;
    window.location.href = redirectUri;
  },
};

export default helpers;
