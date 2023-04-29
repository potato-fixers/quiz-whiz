#!/usr/bin/env bash

set -e  

docker run --name quizwhiz -p 3000:3000 -dit quizwhiz && docker run --name postgres -p 5432:5432 -dit postgres  