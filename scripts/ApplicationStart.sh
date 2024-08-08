#start-containers.sh

#!/bin/sh
cd /home/mubin/devopspipeline

sudo docker-compose build
sudo docker-compose up -d