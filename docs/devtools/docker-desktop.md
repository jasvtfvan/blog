# docker-desktop

## 1. docker-desktop安装

官网地址:

[https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

## 2. 配置镜像加速

配置Docker Engine，添加docker加速镜像如下：

```sh
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
    "http://hub-mirror.c.163.com"
  ]
}
```

注意false后边的逗号，]后边不能有逗号

## 3. docker-compose安装

3.1. 查看版本

```sh
docker-compose version
```

>默认docker-desktop会集成安装，如果未安装则没有版本信息

3.2. 安装brew

1. 中科大镜像安装

```sh
/bin/bash -c "$(curl -fsSL <https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh>)"
```

2. 更换下载源

```sh
git -C "$(brew --repo)" remote set-url origin git://mirrors.ustc.edu.cn/brew.git
```

>更换brew

```sh
git -C "$(brew --repo homebrew/core)" remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git
```

>更换homebrew-core

```sh
git -C "$(brew --repo homebrew/cask)" remote set-url origin <https://mirrors.ustc.edu.cn/homebrew-cask.git>
```

>更换homebrew-cask

```sh
echo 'export HOMEBREW_BOTTLE_DOMAIN=<https://mirrors.ustc.edu.cn/homebrew-bottles>' >> ~/.bash_profile
```

>更换homebrew-bottles

```sh
source ~/.bash_profile
```

>让bottles配置生效

3. 更新软件包信息

```sh
brew update
```

参考文章:

[https://zhuanlan.zhihu.com/p/665201467](https://zhuanlan.zhihu.com/p/665201467)

3.3. 安装docker-compose

```sh
brew install docker-compose
```
