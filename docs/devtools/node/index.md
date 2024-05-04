# node

## 1. nvm

* node版本管理工具，可以管理多个node版本 `node version management`
* nvm官方地址: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
* nvm安装，mac及linux，可根据官方说明安装，windows可参考其他网上方法

### 1.1 mac安装举例

* 以下两种命令，任意选择一个，可获取到资源即可

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

>注意，该版本号为举例，请根据具体官方提供版本号进行安装

* `/etc/`目录下为全局文件，`~/`目录下为user文件，全局文件优先级更高
* 查看和修改配置，建议到`user`下完成
* `~/.bashrc`,`~/.profile`,`~/.zshrc`优先级如下图，其中`.zshrc`关联窗口
![shell-profile](./images/shell-profile.png)
* 查看`.zshrc`配置，修改`.bash_profile`

```bash
ls -a ~/
```

>查看`user`目录里包含上述哪些文件

```bash
cat ~/.zshrc
```

>source /Users/$USER/.bash_profile
>说明真正的配置在`.bash_profile`中

* 将下边命令加入到`.bash_profile`中

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

```bash
source ~/.bash_profile
```

* 如果未生效，重新开启命令窗口

### 1.2 常用命令

```bash
nvm --version
```

>查看nvm版本

```bash
nvm ls
```

>列出所有已经安装的node版本

```bash
nvm current
```

>当前node版本

```bash
nvm use v20.10.0
```

>切换node的版本

```bash
nvm alias default v20.10.0
```

>指定默认node版本

```bash
nvm ls-remote
```

>列出所有可以安装的node版本号

```bash
nvm install v20.10.0
```

>安装指定版本号的node

```bash
nvm uninstall v20.10.0
```

>卸载指定版本号的node

```bash
node -v
```

>查看node版本

## 2. npm

* node的包管理工具

```bash
npm -v
```

>查看npm版本

```bash
npm init -y
```

>初始化当前目录生成package
>`-y`生成默认配置，不加`-y`需要选择package配置参数

```bash
npm list -g --depth=0
```

>查看所有已安装的包
>`-g`指向全局，不加`-g`指向当前目录
>`--depth=0`不显示整棵树，只显示第一层

```bash
npm install express --save -dev
```

>安装express  
>`--save`和`-dev`同时存在，添加到`package.json`的`devDependencies`中  
>`--save`单独存在，添加到`package.json`的`dependencies`中  
>`-S`等价于`--save`，`-S -D`等价于`--save -dev`  

```bash
npm uninstall express
```

>卸载express

```bash
npm show express
```

>显示express详情

```bash
npm update express
```

>升级express

```bash
npm update
```

>升级所有模块

## 3. nrm

* npm的镜像源管理工具

### 3.1 安装

```bash
npm i -g nrm
```

>全局安装
>
### 3.2 常用命令

```bash
nrm ls
```

```console
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
* taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

>查看所有npm源(`*`指向当前使用源)

```bash
nrm use taobao
```

>切换npm源

```bash
nrm add example https://example.com.cn/
```

>添加自定义npm源

```bash
nrm del example
```

>删除npm源
