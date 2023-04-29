#!/usr/bin/env bash

set -e  

docker build -t postgres ../../server/database/ && docker build -t quizwhiz ../../client/