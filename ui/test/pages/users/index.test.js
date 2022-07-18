import { render, screen, waitFor } from "@testing-library/react";
import Users from "../../../pages/users/index";
import * as UserService from "../../../services/user.service"

import sinon from "sinon"

describe("users index", () => {
    const sandbox = sinon.createSandbox();
    beforeEach(() => {

    });

    it("should get users", async () => {
        const users = [{
            id: 1,
            name: 'username'
        }]

        sandbox.mock(UserService).expects('getUsers').once()
            .returns({ status: "success", entity: users });

        render(<Users />);

        const list = screen.getByRole("list", { name: /users/i })
        expect(list).toMatchSnapshot()
        expect(screen.getByText("Create")).toBeInTheDocument();
        waitFor(() => { })
    })

    afterEach(() => {
        sandbox.verifyAndRestore();
    });
})
