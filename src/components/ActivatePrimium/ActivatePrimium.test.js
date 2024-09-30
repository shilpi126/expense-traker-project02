import { render, screen } from "@testing-library/react";
import Activateprimium from "./Activateprimium";
import userEvent from "@testing-library/user-event";



describe("Activate Primium Component", () => {
    
    test("renders Hello World text", () => {
        render(<Activateprimium/>)

        const h1Element = screen.getByText("Hello World!")
        expect(h1Element).toBeInTheDocument();
    })

    test("renders Activated Primium text", () => {
        render(<Activateprimium/>)

        const buttonElement = screen.getByText("Activate Primium")
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Please Activate Primium Features')
        expect(outputElement).toBeInTheDocument();

    })

    test("renders Primium Activated text", () => {
        render(<Activateprimium/>)

        const buttonElement = screen.getByText("Activate Primium")
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('Primium Activated', {exact: false})
        expect(outputElement).toBeNull();
    })


    test("renders Cancle Primium text", () => {
        render(<Activateprimium/>)

        const buttonElement = screen.getByText("Cancle Primium")
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('Please Activate Primium Features', {exact: false})
        expect(outputElement).toBeInTheDocument();
    })

})