import axios from 'axios';
import { setLocalStorage, loginUser } from '../../../Utils/App.util';

export const registerUser = async (email, password, passwordCheck, displayName) => {
    try {
        const newUser = { email, password, passwordCheck, displayName };
        await axios.post('http://huddle-online-library.herokuapp.com/users/register', newUser);
        const loginResponse = await loginUser(email, password);
        setLocalStorage(loginResponse.data.token);
        return loginResponse;
    } catch (err) {
        console.log(err);
    }
};