#!/bin/bash

if [ $# -ne 1 ] ; then
  echo "Usage $0 [commit message]"
  echo "This will pull from master repo and rebuild php.js"
  exit 1
fi

git fetch main
git merge main/master
git push
cd tools
./phpjscompile.php > ../build/php.js
cd ..
git add .
git commit -m "$1" .
git push
