#Base image to base our new custom image on : In this case we use the official node image from dockerhub
FROM node:15 
#Optional but recommended : Sets workin directory of container to be /app within container, also any copied file to container
#are by default sent to this directory. 
WORKDIR /app
#Copy package.json file (which contains all dependencies) into the docker image ( use paths / "." refers to current directory )
# Since we specified working directory -> "." will refer to it
# COPY "Source path" "Destination path"
COPY package.json . 

#Install the dependencies from the package.json file
ARG NODE_ENV   
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi


#Copy all the remaining files into the container
# "." and "./" are the same thing
COPY . ./     
# Copy . ./  -> Copies everythin = Bad for security and efficiency reasons ----> .Dockerignore   file !



# ---------- Each command is treated as a layer / After each command docker caches the result of each layer when we run.

ENV PORT 3000 
#This will give the env variable PORT the default value 3000 ( the "process.dev.PORT"  in the index.js file)
#Can be overide by the run command or the docker-compose file .

EXPOSE $PORT
#Define network ports for this container to listen on at runtime / !!!! this is just for documentation not actualy connects anythin on port 3000 !!!!
# Docker container by default can talk to outside world (anythin thats not the container) but NOT vice versa !!!!!!!!!!


# We tell Container to execute " node index.js" when it runs  
#CMD ["node", "index.js"] ------------------------------!!!!!!!!!!!!!!!!!!!!!!



#Since we changed the package.json to also run the "dev" environment ... new command to run is this ( to run the dev env)
CMD ["npm", "run", "start"]
