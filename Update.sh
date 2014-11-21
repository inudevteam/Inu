#!/bin/bash

git checkout master
git checkout user002
git add -A
git commit -m '$1'
git checkout master
git merge user002 -m '$1'
git push
