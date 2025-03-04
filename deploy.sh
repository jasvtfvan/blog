#!/usr/bin/env sh

# 终止一个错误
set -e

# 删除 dist目录
rm -rf docs/.vitepress/dist

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs/.vitepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jasvtfvan/blog.git main:gh-pages

cd -