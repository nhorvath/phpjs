#!/bin/bash

if [ $# -ne 1 ] ; then
  echo "Usage $0 [commit message]"
  echo "This will pull from master repo and rebuild php.js"
  exit 1
fi

git remote | grep upstream
if [ $? -ne 0 ] ; then
  git remote add upstream https://github.com/kvz/locutus.git
fi

git fetch upstream
git merge v1.3.2
git push
cd tools
./phpjscompile.php > ../build/php.js
cd ..
git add .
git commit -m "$1" .
git push
