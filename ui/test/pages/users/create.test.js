import { render, fireEvent } from "@testing-library/react";
import Create from "../../../pages/users/create";
import * as UserService from "../../../services/user.service"
import * as verifiers from "../../helpers/verifiers"

import sinon from "sinon"

describe("create user page", () => {
    const sandbox = sinon.createSandbox();
    beforeEach(() => {

    });

    it("page render", async () => {
        const { getByText, getByTestId, getByRole } = render(<Create />);
        const nameLabel = getByText(/Name/i);
        const emailLabel = getByText(/Email/i);
        expect(nameLabel).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
        const nameInput = getByTestId('name-input');
        expect(nameInput).toBeInTheDocument();
        expect(nameInput).toHaveAttribute("type", "text");
        const emailInput = getByTestId('email-input');
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute("type", "email");
        const submitBtn = getByRole('button', { name: 'Submit' });
        expect(submitBtn).toBeInTheDocument();
    })

    it("submission", async () => {
        const { getByText, getByTestId, getByRole } = render(<Create />);
        const nameLabel = getByText(/Name/i);
        const emailLabel = getByText(/Email/i);
        expect(nameLabel).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
        const nameInput = getByTestId('name-input');
        expect(nameInput).toBeInTheDocument();
        expect(nameInput).toHaveAttribute("type", "text");
        fireEvent.change(nameInput, { 'target': { 'value': 'userName' } });
        const emailInput = getByTestId('email-input');
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute("type", "email");
        fireEvent.change(emailInput, { 'target': { 'value': 'userName@gmail.com' } });
        const submitBtn = getByRole('button', { name: 'Submit' });
        expect(submitBtn).toBeInTheDocument();
        sandbox.mock(UserService).expects('createUser')
            .once()
            .withArgs(verifiers.verifyArgs((args) => {
                expect(args).toEqual({
                    name: 'userName',
                    email: 'userName@gmail.com'
                });
            }))
            .returns({ status: "success", entity: { name: 'userName', email: 'userName@gmail.com' } });

        fireEvent.click(submitBtn);
    })


    afterEach(() => {
        sandbox.verifyAndRestore();
    });
})
