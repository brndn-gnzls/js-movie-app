# JavaScript Movie Application
An application in React to fully explore Tailwind and integrate 3rd party APIs.

### Usage
Navigate to https://www.themoviedb.org/?language=en-US, create an account, and generate an API key.

Create a ```.env``` file in the project root.
```
$ touch .env
```
Next, inside the ```.env``` file define your API key as an environment variable.
```
REACT_APP_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Install the dependencies using ```npm``` then start the applicaiton.

[Demo](https://js-movie-api.netlify.app/)

#### Features
- Browse by popularity
- Browse by top rated
- Browse by upcoming
- Search by movie title