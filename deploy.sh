#!/bin/bash

git add .  
read -p "Message: " msg
git commit -m "$msg"
git push -u origin main

npm run build

firebase deploy
