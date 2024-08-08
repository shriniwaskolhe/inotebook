#!/bin/sh

# Ensure the script exits on any error
set -e

# Navigate to the correct directory
cd /home/mubin/devopspipeline

# Ensure the nginx directory exists
if [ ! -d "nginx" ]; then
    echo "The target directory 'nginx' does not exist. Creating it..."
    mkdir -p nginx || { echo "Failed to create 'nginx' directory"; exit 1; }
fi

# Copy build files to the nginx directory
sudo cp -r build/* nginx/ || { echo "Failed to copy files to 'nginx' directory"; exit 1; }

# Check if Docker is running and start it if necessary
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Starting Docker..."
    sudo systemctl start docker || { echo "Failed to start Docker"; exit 1; }
fi

# Stop and remove Docker containers
sudo docker-compose down || { echo "Failed to stop containers"; exit 1; }

echo "Containers stopped successfully"
