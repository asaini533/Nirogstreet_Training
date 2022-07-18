
import sinon from "sinon"

export const verifyArgs = fn => sinon.match((value) => {
    fn(value);
    return true;
});
