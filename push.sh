#/opt/homebrew/bin/bash
 
read -p "Message: " msg

if [ -z "$msg" ]
    then msg="Generic file update(s); no commit message provided"
fi

yarn build
firebase deploy

git add .
git commit -m "$msg"
git push -u origin main
