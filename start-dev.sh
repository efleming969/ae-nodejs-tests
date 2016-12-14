#!/bin/bash

docker run \
  --name ae-node-tests \
  --rm -it \
  -v $PWD:/usr/src/app \
  -w /usr/src/app \
  -p 8080:8080 \
  node:7.2 /bin/bash
