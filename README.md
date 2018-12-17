#  Machine Learning Web application for image recognition using NodeJS, MongoDB, TF, GCP 

## (Depreciated, Please refer to https://github.com/sunsuntianyi/mlWebApp_v2)


![alt text](https://github.com/sunsuntianyi/webapp/blob/master/demo1.png)

![alt text](https://github.com/sunsuntianyi/webapp/blob/master/demo2.png)


Step 1: The containerized Neural Network model is already uploaded to the GCP and integrated into the app, all you have to do is to unzip the "MLmodel.zip" file. 


Step 2: Install MongoDB 

    # First you need to install MongoDB on your system, Please visit MonogoDB site and download it.


Step 3: Install NodeJS 
 
     # Please visit NodeJS site and download installer, Install on your system, It also install NPM


Step 4: Install required dependencies

    # build node_modules:

    # first build an package.json file, then cd to the file dir and run:
    
    npm install     
    
    # If you are unsure about this step, you can always use the prebuild module which I uploaded as the .zip file: "node_modules.zip", unzip it.

Step 5: Running the application:

    # Change directory to the webapp dir ad run using command npm:
    
    cd /Users/xxxx/Desktop/WEBAPP_BACKUP
    npm start
    
    # Your local webapp can then be accessed at 0.0.0.0:3000
    
    
EXTRA:

The neural network model is up in the GCP and running 24/7, therefore, if you just want to use the model, feel free to use it.

Download and unzip the "MLmodel.zip", remove the '.py' extension

Call the file in the terminal:

    MLmodel/inception_client --server=35.196.81.176:9000 --image= absolute/path/to/your/image
    
![alt text](https://github.com/sunsuntianyi/webapp/blob/master/demo3.png)
