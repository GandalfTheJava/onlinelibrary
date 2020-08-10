import axios from 'axios';
export const checkLoggedIn = async () => { //check to see if a valid jwt token is present in the local storage
    let token = localStorage.getItem("auth-token");
    if (token == null) {
        localStorage.setItem("auth-token", "");
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
        return { token: token, user: userData.data };
    };
};
