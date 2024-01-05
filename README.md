/ 
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