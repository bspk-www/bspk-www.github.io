set -e
yarn build
cd src/.vuepress/dist
git init
git add -A
git commit -m 'Deploy'
git push -f https://github.com/bspk-www/bspk-www.github.io.git source:master
cd -