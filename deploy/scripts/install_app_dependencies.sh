#!/bin/bash
sudo apt-get update && sudo apt-get upgrade -y && \
sudo apt-get install curl && \
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
sudo apt-get install -y nodejs && \
sudo apt-get install git && \
git clone https://github.com/potato-fixers/quiz-whiz.git && \
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000 && \
cd quiz-whiz