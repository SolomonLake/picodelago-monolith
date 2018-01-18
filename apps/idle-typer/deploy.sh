#!/bin/bash

set -e

usage(){
	echo "Usage: $0 <environment name>"
	exit 1
}

function deploy() {
    ./node_modules/.bin/gulp
    ENVIRONMENT_NAME=$1
    echo $ENVIRONMENT_NAME

    echo Copying configuration files from environment/$ENVIRONMENT_NAME/
    cp "environment/$ENVIRONMENT_NAME/.gapps" ~/.gapps
    cp "environment/$ENVIRONMENT_NAME/gapps.config.json"  ./gapps.config.json 

    cp "environment/$ENVIRONMENT_NAME/env.gs"  ./dist/env.gs

    # osascript -e 'display notification "Starting upload" with title "Deploy"'
    echo Uploading files to $ENVIRONMENT_NAME ...

    gapps upload

    osascript -e 'display notification "Done uploading" with title "Deploy"'

    rm ~/.gapps
    rm ./gapps.config.json 
}

[[ $# -eq 0 ]] && usage
deploy "$1"



