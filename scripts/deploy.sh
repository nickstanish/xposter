#!/usr/bin/env bash
ENVIRONMENT=$1
IS_SUCCESS=0
if [[ "$ENVIRONMENT" == "production" ]]; then
  git push -f production HEAD:master
  IS_SUCCESS=1
fi

if [[ $IS_SUCCESS == 0 ]]; then
  printf "Invalid Environment\n" >&2;
  exit 1
fi