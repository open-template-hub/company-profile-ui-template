#!/usr/bin/env bash

echo "Building OTH Web UI app for $NODE_ENV"

build_dev='node version-generator.ts > ./src/environments/version.ts && ng build --configuration=staging'
if [ $NODE_ENV = "development" ]; then
  echo "running $build_dev ..."
  eval "$build_dev"
fi

build_prod='node version-generator.ts > ./src/environments/version.ts && ng build --prod'
if [ $NODE_ENV = "production" ]; then
  echo "running $build_prod ..."
  eval "$build_prod"
fi
