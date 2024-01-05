# Welcome to Flights Service

## Project Setup
- clone your project on local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variables
    -`PORT=3000`
-Inside the `src/config` folder create a new file `config.json` and add the following piece of json
    ``` {
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
    }
    ```






## Project Structure
    // Role or Task based Architecture
        - src/   //core logic of the server 
            index.js //server
            models/   //how the database will look like
            controllers/
            middlewares/
            services/
            utils/   //helper functions or the constants which are same throughout the codebase
            config/  //database configuration
            repository/  methods through which we can access the models
            
        // not added when the project is deployed 
        - tests/ 
        - static/
        -temporary files