# team13

## Introduction
Welcome to Moviegram. This is an interactive and social Movie Review Website.

The app is supposed to be a social movie review website where users can search for movie reviews as well as connect with other users with similar movie interests. 

## Running locally
In the MovieGram directory you can run the `npm start` command which will open the app and take you to the Home page of our app. 

## Setup
```
cd moviegram/
npm install
npm start
```
## Core functionality
1. The ability to signup/login
2. The ability to add reviews, comment on reviews, and upvote reviews
3. Admin - Add new movies and Remove movies
4. View/Edit your profile

## How to use
* You will be directed to the Home page initially where a user has an option of searching for a pre-existing movie review or login to their account (if they have one) or signup for an account. 
* The signup page will ask you for your information but will not create an account for now.
* There are 3 pre-existing users User1, User2 and Admin.
* Username for User1 : username1
* Password for User1 : password1
* Username for User2 : username2
* Password for User2 : password2
* Username for Admin : admin
* Password for Admin : admin

* Once logged in a user can see movie reviews posted by the users they follow and have the ability to comment and upvote/downvote any review.
* Logged in users can search for movies, view and edit their own profile, view other users profile (will be implementes in phase2) and can add a moview review of their own.

* Once the admin is logged in, he can see all the movie reviews posted by all the users and has ability to comment, upvote/downvote and remove any movie reviews if the review is not appropriate and has too many spoilers.
* The admin also has the ability to add movies to the database.
* When you add a review, it gets added to the bottom
* We added a follow/unfollow button
* If you click on a profile picture on a review in the newsfeed, it will take you to that user's page.
* Signup page can add data to input fields and pick a profile pic. In phase 2, we will create a new user in the DB and verify the email
## Sample Usage
### Case 1. Normal User
1. Go to home screen
2. Press the login button
3. Enter username1 and password1
4. You will be redirected to Newsfeed
5. Press the profile button on the top
6. Try "Add a review"
7. View the profile and then click on the "News" Icon to go back to the NewsFeed
8. Try adding a comment
9. Search for a movie using the search bar -- Try "Dangal" or "Interstellar"
### Case 2. Admin
1. Go to home screen
2. Press the login button
3. Enter admin and admin
4. Go to the admin screen -- Third button on the menu bar
5. Remove a review
6. Add a movie

