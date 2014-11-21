#!/bin/bash

git checkout master
git checkout user002
git add -A
git commit
git checkout master
git merge user002
git push
ssh ubuntu@128.138.242.224
cd /var/www/html
sudo git pull
exit
