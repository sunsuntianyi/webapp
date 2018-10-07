#  Web application for image recognition using NodeJS, MongoDB, TF, GCP (Containerization using Docker is currently been working on...)

Step 1: The Neural Network model is already uploaded to the GCP and integrated into the app, all you have to do is to unzip the "MLmodel.zip" file. 


Step 2: Install MongoDB 

    First you need to install MongoDB on your system, Please visit MonogoDB site and download it.


Step 3: Install NodeJS 
 
     Please visit NodeJS site and download installer, Install on your system, It also install NPM


Step 4: Install required dependencies

    build node_modules:

    first build an package.json file, then cd to the file dir and run:
    
    npm install     
    
    If you are unsure about this step, you can always use the prebuild module which I uploaded as the .zip file: "node_modules.zip", unzip it.

Step 5: Running the application:

    Change directory to the webapp dir ad run using command nodemon:
    
    cd /Users/xxxx/Desktop/WEBAPP_BACKUP
    nodemon bin/www
    
    Your local webapp can be accessed at 0.0.0.0:3000
