# uiuc-toilet_API
API for the UIUC Toilet App created with Express, Mongoose, and Node. Created for the UIUC Toilet Android app (repo [here](https://github.com/calebchow9/uiuc-toilet_android))

## Routes
| Route       | Endpoint   | Description     |
| :------------- | :----------: | -----------: |
|  /bathroom | GET   | Retrieves all bathrooms stored in the MongoDB database.    |
| /bathroom   | POST | Posts bathroom JSON object into the database. |
| /bathroom/name   | POST | Search database for bathroom (by name). |
| /bathroom/:name   | GET | Search database for bathroom (by id). |

API is hosted on Heroku at https://uiuc-toilet.herokuapp.com

## Models
Bathroom
* name
* gender
* latitude
* longitude
* openTime
* closeTime
* username
