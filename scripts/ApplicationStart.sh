#start-containers.sh

#!/bin/sh
cd /home/mubin/devopspipeline

docker-compose.yml build
docker-compose.yml up -d