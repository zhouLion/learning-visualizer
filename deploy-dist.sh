#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo 当前目录`pwd`

echo 开始构建
# 构建文档
npm run build

# 进入dist 目录，将这个目录发布到 gh-pages 分支上
cd dist

echo 当前目录`pwd`

echo 开始准备提交
# 每次重新初始化 git
git init
git add -A

# 此处的 cardID 可能需要替换
git commit -m 'S-EMC#850 自动部署 pages'

echo 准备提交
# 发布到 code_pages 分支
git push -f ssh://git@github.com:zhouLion/learning-visualizer.git main:gh-pages

cd -
