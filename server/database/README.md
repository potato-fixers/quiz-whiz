# Quiz Whiz - Postgres - Docker Guide

  ## Build The Container: 
    docker build -t postgres .

  ## Start the Container: 
    docker run --name postgres -e POSTGRES_PASSWORD=<db_password> -p 5432:5432 -v <volume_name>:</path/to/volume/data> -dit <container_name>

  ### *Or, to run the container without volume*
    docker run --name postgres -e POSTGRES_PASSWORD=<db_password> -p 5432:5432 -v <volume_name>:</path/to/volume/data> -dit <container_name>

  # Enter the Container 
    docker exec -it <container_id or container_name> /bin/bash

  # View the container logs 
  #### *Remove the `-f` flag if you want to return to the command prompt after the log data has been output.*
    docker logs <container_id> -f 