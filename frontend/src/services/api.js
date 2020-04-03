import axios from 'axios'
// const baseURL = 'https://moviegram-back.herokuapp.com'
// const baseURL = 'http://localhost:5000/api'
const baseURL = 'http://localhost:5000'


export const insertUserToMongo = async data => {
    try {
        await axios.post(baseURL + '/users/', data)
    } catch (err) {
        console.log(err)
    }
}

export const getAllMovies = axios.get(baseURL+'/movies')

export const getKeyMoviePairs = async () => {
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
        console.log(err)
    }
}


export const getGenres = async () => {
    try {
        let res = await axios.get(baseURL + '/movies/genre/')
        return res
    } catch (err) {
        console.log(err)
    }
}

export const getMoviesByGenre = async genre => {
    try {
        let res = await axios.get(baseURL + "/movies/genre/" + genre)
        return res
    } catch (err) {
        console.log(err)
        return err
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
        // FOR DEV
        app.setState({ currentUser: "username1", auth: false});
        console.log(err)
    }
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

    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
};

export const updateUserFollowInfo = async (user) => {
  const url = `${baseURL}/users/user_update_follow/` + user.username
  const request = new Request(url, {
      method: "put",
      body: JSON.stringify(user),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"}
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

export const getAllReviews = () => axios.get(baseURL + '/admin')

export const getReview = (id) => axios.get(baseURL + '/reviews/'+id)

export const getUser = (username) => axios.get(baseURL + '/users/'+username)

export const getUserReviews = (username) => axios.get(baseURL + '/reviews'+'/user_reviews/'+username)

export const getFriendsOfUser = (username) => axios.get(baseURL + '/users/get_friends/'+username)

export const getUserFollowers = (username) => axios.get(baseURL + '/users/get_followers/'+username)

export const getDownvoters = (id) => axios.get(baseURL + '/reviews/downvoters/'+id)

export const getUpvoters = (id) => axios.get(baseURL + '/reviews/upvoters/'+id)

export const addUpvoter = (id, upvoter) => axios.patch(baseURL + '/reviews/add_upvoter/'+id+'/'+upvoter)

export const addDownvoter = (id, downvoter) => axios.patch(baseURL + '/reviews/add_downvoter/'+id+'/'+downvoter)

export const addMovieUpvoter = (id, upvoter) => axios.patch(baseURL + '/movies/add_upvoter/'+id+'/'+upvoter)

export const addMovieDownvoter = (id, downvoter) => axios.patch(baseURL + '/movies/add_downvoter/'+id+'/'+downvoter)


export const isUpvoted = async (movie_id, user_id) => {
    try {
        let res = await axios.get(baseURL + "/movies/vote/" + movie_id + '/' + user_id)
        return res
    } catch (err) {
        console.log(err)
    }
}

export const addMovie = async (title, director, stars, description, genres) => {
    const url = `${baseURL}/admin/add_movie`
    const request = new Request(url, {
      method: "post",
      body: JSON.stringify({title: title, director: director, stars: stars, description: description, genres: genres}),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
    })
    fetch(request).then(res =>{
        if(!res.ok){
            throw new Error("Something went wrong...");
        } else{
          return true
        }
    }).catch(error => {
        console.log("caught some error please solve me!!")
    })
}

export const removeReview = async (username, movie) => {
    const url = `${baseURL}/admin/remove_review`
  //  const body = {username: username), movie: JSON.stringify(movie)}
    const request = new Request(url, {
      method: "delete",
      body: JSON.stringify({username: username, movie: movie}),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
    });
    fetch(request).then(res =>{
        if(!res.ok){
            throw new Error("Something went wrong...");
        } else{
          return true
        }
    }).catch(error => {
        console.log("caught some error please solve me!!")
    })
}


export const addReview = async (review) => {
    const url = `${baseURL}/reviews/add_review`
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(review),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request).then(res =>{
        if(!res.ok){
            throw new Error("Something went wrong...");
        } else{
          return true
        }
    }).catch(error => {
        console.log("caught some error please solve me!!")
    })
}

export const addComment = async (comment, id) => {
    const url = `${baseURL}/reviews/add_comment/${id}`
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(comment),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request).then(res =>{
        if(!res.ok){
            throw new Error("Something went wrong...");
        } else{
          return true
        }
    }).catch(error => {
        console.log("caught some error please solve me!!")
    })
}

export const getUserImage = (username) => axios.get(baseURL + '/Images/'+username)

export const addImage = (form, user_id) => {
    // the URL for the request
    const url = `${baseURL}/images/` + user_id ;

    // The data we are going to send in our request
    const imageData = new FormData(form);
    // console.log(form);
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: imageData,
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If image was added successfully, tell the user.
                console.log("YaYY SUCCESS");
            } else {
                // If server couldn't add the image, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("NO NO FAILURE");
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateDescription = async (username, newDescription) => {
  const url = `${baseURL}/users/user_update_description/` + username
  console.log(newDescription);
  // const body = {newDescription: newDescription}
  const request = new Request(url, {
      method: "put",
      body: JSON.stringify({newDescription}),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"}
  });
  fetch(request).then(res =>{
      console.log(res)
      if(!res.ok){
          throw new Error("Something went wrong...");
      } else{
          console.log("IT WORKSS YAYY");
      }
  })
}


export const getRating = async id =>{
    try {
        let res = await axios.get(baseURL + '/movies/rating/' + id)
        return res
    } catch (err) {
        console.log(err)
    }
}
