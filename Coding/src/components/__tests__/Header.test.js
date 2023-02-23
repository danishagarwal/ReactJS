import { render } from "@testing-library/react";
import HeaderComponent from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store.js"
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {

    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store} >
                <HeaderComponent />
            </Provider>
        </StaticRouter>
    );

    //Virtual DOM object
    // console.log(header);

    //Finding logo from header
    const logo = header.getAllByTestId("logo");
    console.log(logo);
    //Check if logo is loaded

    expect(logo[0].src).toBe("http://localhost/dummy.jpg");



})