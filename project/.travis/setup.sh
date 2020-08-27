#!/bin/bash

echo "TRAVIS_BUILD_ID=$TRAVIS_BUILD_ID"

# export BUILD_TIME=$(date +"%s")
export BUILD_TIME=$TRAVIS_BUILD_ID
echo "BUILD_TIME=$BUILD_TIME"

export NODE_ENV=production
echo "NODE_ENV=$NODE_ENV"

export CAN_DEPLOY=false



if [[ ${TRAVIS_BRANCH} == '#replace-labBranch#' ]]; then
  export DEPLOY_TARGET=dev
  export CAN_DEPLOY=true
  echo "DEPLOY_TARGET=$DEPLOY_TARGET"

  export AWS_ACCESS_KEY_ID=$dev_access_key_id
  export AWS_SECRET_ACCESS_KEY=$dev_secret_access_key
  export app_bucket='#replace-bucketName#-dev-api'

 elif [[ ${TRAVIS_BRANCH} == "#replace-stagingBranch#" ]]; then
   export DEPLOY_TARGET=stg
   export CAN_DEPLOY=true
   echo "DEPLOY_TARGET=$DEPLOY_TARGET"

   export AWS_ACCESS_KEY_ID=$stg_access_key_id
   export AWS_SECRET_ACCESS_KEY=$stg_secret_access_key
   export app_bucket='#replace-bucketName#-staging-api'

elif [[ ${TRAVIS_BRANCH} == "#replace-prodBranch#" ]]; then
   export DEPLOY_TARGET=prod
   export CAN_DEPLOY=true
   echo "DEPLOY_TARGET=$DEPLOY_TARGET"

   export AWS_ACCESS_KEY_ID=$prod_access_key_id
   export AWS_SECRET_ACCESS_KEY=$prod_secret_access_key
   export app_bucket='#replace-bucketName#-prod-api'
  
fi