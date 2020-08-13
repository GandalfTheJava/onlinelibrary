import axios from 'axios';
export const checkLoggedIn = async () => { //check to see if a valid jwt token is present in the local storage
    let token = localStorage.getItem("auth-token");
    if (token == null) {
        setLocalStorage(null);
        token = "";
        return;
    }
    const tokenResponse = await axios.post('http://localhost:5000/users/tokenisvalid',
        null,
        {
            headers: { "x-auth-token": token }
        })
    if (tokenResponse.data) {
        const userData = await axios.get('http://localhost:5000/users/', { headers: { "x-auth-token": token } });
        setLocalStorage(token);
        return { token: token, user: userData.data };
    };
};

export const setLocalStorage = (token) => {
    if (token != null) localStorage.setItem("auth-token", token);
    else localStorage.setItem("auth-token", "");
};
export const loginUser = async (email, password) => {
    const loginResponse = await axios.post('http://localhost:5000/users/login', { email, password });
    return loginResponse;
}
