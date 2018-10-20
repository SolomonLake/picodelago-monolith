PLATFORM=$(uname|tr '[:upper:]' '[:lower:]')
cd ./node_modules/reason-cli-$PLATFORM
ls ../reason-cli-$PLATFORM/bin
ln -sf ../reason-cli-$PLATFORM/bin/* ../.bin/
