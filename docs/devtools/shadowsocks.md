# 命令终端代理

::: danger 免责声明
梯子使用需合法合规，出现任何问题，使用者自行承担法律责任
:::

## 1. 梯子推荐

[https://portal.shadowsocks.au/](https://portal.shadowsocks.au/)

经博主测试，修改**hosts**方法效果差，推荐梯子。

根据官网教程配置完毕后，可以在梯子工具中复制**终端代理命令**，各工具位置不同，请自行寻找。

## 2. 终端配置

1. 打开梯子软件，**复制环境变量**（有的叫**终端代理命令**）
::: info 例如
export https_proxy=<http://127.0.0.1:7897> http_proxy=<http://127.0.0.1:7897> all_proxy=socks5://127.0.0.1:7897
:::

2. 修改~/.bash_profile

```sh
alias open_proxy='export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897'
alias close_proxy='unset http_proxy;unset https_proxy;unset all_proxy'
alias test_proxy='curl -v google.com'
```

```sh
source ~/.bash_profile
```

::: tip 注意
这里的端口号`7897`，要根据你自己实际的配置
:::

3. 如何使用

::: info 使用

```sh
open_proxy
```

开启代理

```sh
test_proxy
```

测试代理，查看`google`内容是否获取成功，

```sh
close_proxy
```

关闭代理
:::

## 3. 浏览器代理

::: warning 浏览器代理
有时候浏览器的代理，使用了上边配置的代理`http://127.0.0.1:7897`，

关闭`shadowsocks`会发现无法上网，此时开启`shadowsocks`或者关闭浏览器代理即可.
:::

## 4. 虚拟机访问

详见[parallels-desktop#3.6](../ostools/parallels-desktop.md#_3-6-虚拟机梯子)
