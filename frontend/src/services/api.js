import axios from 'axios'
// const baseURL = 'https://moviegram-back.herokuapp.com'
const baseURL = 'http://localhost:5000'

export const insertUserToMongo = async data => {
    try {
        await axios.post(baseURL + '/users/', data)
    } catch (err) {
        console.log(err)
    }
}

export const getUser = async id => {
    try {
        await axios.get(baseURL + '/users/' + id)
    } catch (err) {
        console.log(err)
    }
}

export const readCookie = (app) => {
    const url = `${baseURL}/check-session`;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const login = (loginComp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${baseURL}/login`, {
        method: "post",
        body: JSON.stringify(loginComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const getAllReviews = () => axios.get(baseURL + '/reviews')
