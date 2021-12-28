#!/bin/bash
 
read -p "Message: " msg

yarn build
firebase deploy

git add .
git commit -m "$msg"
git push -u origin main
