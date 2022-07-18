
import * as HttpService from "./http.service";
import * as URL  from "./url.service";

export const createUser = (user) => {
    return HttpService.postWithAuth('http://localhost:3000/users', user);
}

export const getUsers = () => {
    return HttpService.getWithAuth(`${URL}/users`);
}

export const getUser = (userId) => {
    return HttpService.getWithAuth(`http://localhost:3000/users/${userId}`);
}