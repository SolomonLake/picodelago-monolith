#!/bin/bash
set -e

get_abs_filename() {
  # $1 : relative filename
  echo "$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
}

function watch {
    LAYOUT_TEMP_FILE=$(mktemp)
    SCRIPT_PATH=$(dirname $(get_abs_filename "$BASH_SOURCE"))
    ROOT_PATH="$SCRIPT_PATH/../.."
    sed "s|    root:.*|    root: $ROOT_PATH|" $SCRIPT_PATH/watch.yml > $LAYOUT_TEMP_FILE
    if [ -x "$(command -v itermocil)" ]; then
        itermocil --layout $LAYOUT_TEMP_FILE
    elif [ -x "$(command -v teamocil)" ]; then
        echo "teamocil --layout $LAYOUT_TEMP_FILE"
        tmux new-session "teamocil --layout $LAYOUT_TEMP_FILE"
    else 
        printf "itermocil is not installed"
    fi
}

watch