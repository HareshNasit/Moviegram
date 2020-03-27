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

// export const getUser =  (id) => {  axios.get(baseURL + '/users/' + id) }

export const getKeyMoviePairs = async _ => {
    try {
        let res = await axios.get(baseURL + '/movies/keypairs')
        return res
    } catch (err) {
        console.log(err)
    }
}

export const getMovie = async id => {
    try {
        let res = await axios.get(baseURL + '/movies/movie/' + id)
        return res
    } catch (err) {
        return err
        console.log(err)
    }
}

export const signup = async (user, signupstate) => {
    const url = `${baseURL}/signup/`
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request).then(res =>{
        console.log(res)
        if(!res.ok){
            throw new Error("Something went wrong...");
        } else{
            signupstate.props.history.push({pathname: "/login"})
        }
    }).catch(error => {
        signupstate.setState({error: error})
        signupstate.setState({turnAlert: true})
    })
}

export const readCookie = async (app) => {

    const url = `${baseURL}/session/`;
    try {
        let res = await axios.get(url)
        if (res.data && res.data.currentUser) {
            app.setState({ currentUser: res.data.currentUser });
        }
    } catch (err) {
        console.log(err)
    }
    // fetch(url)
    //     .then(res => {
    //         if (res.status === 200) {
    //             return res.json();
    //         }
    //     })
    //     .then(json => {
    //         console.log(json)
    //         if (json && json.currentUser) {
    //             app.setState({ currentUser: json.currentUser });
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
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
    return new Promise((resolve, reject) => {
    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser });
                resolve({ currentUser: json.currentUser })
            } else {
                reject("Login failed")
            }
        })
        // .catch(error => {
        //     console.log(error);
        //     reject(error)
        // });
    })
};

export const updateUserFollowInfo = async (user) => {
  const url = `${baseURL}/users/user_update_follow/` + user.username
  const request = new Request(url, {
      method: "put",
      body: JSON.stringify(user),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
  });
  fetch(request).then(res =>{
      console.log(res)
      if(!res.ok){
          throw new Error("Something went wrong...");
      } else{
          console.log("IT WORKSS YAYY");
      }
  })
  // .catch(error => {
  //     signupstate.setState({error: error})
  //     signupstate.setState({turnAlert: true})
  // })
}

export const getAllReviews = () => axios.get(baseURL + '/reviews')

export const getUser = (username) => axios.get(baseURL + '/users/'+username)

export const getUserReviews = (username) => axios.get(baseURL + '/reviews'+'/user_reviews/'+username)

export const getFriendsOfUser = (username) => axios.get(baseURL + '/users/get_friends/'+username)

export const getUserFollowers = (username) => axios.get(baseURL + 'users/get_followers/'+username)
