import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/Redux/appStore";
import "@testing-library/jest-dom";

it("Should render header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const onlineStatus = screen.getByRole("nav-bar");

  expect(onlineStatus).toBeInTheDocument();
});

it("Should render header items with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0 items)");

  // /cart/ -> rejex

  expect(cartItems).toBeInTheDocument();
});
