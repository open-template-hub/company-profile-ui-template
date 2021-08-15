#!/usr/bin/env bash

if [ ! -f .env ]; then
  echo "Generating .env file.."
  touch .env
  {
    echo "PORT=4200"
  } >>.env
else
  echo ".env file already exists. Nothing to do..."
fi
