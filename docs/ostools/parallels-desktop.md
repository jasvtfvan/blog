# Parallels Desktop

## 1. 软件安装

根据OS系统版本，选择适合的PD版本下载

可以到App Store下载安装

::: tip 版本说明
该文档对应`macOS Monterey12.2 Intel`，对应PD版本为`18.3.2`
:::

## 2. 常用镜像网站

中科大  [https://mirrors.ustc.edu.cn/](https://mirrors.ustc.edu.cn/)

清华    [https://mirrors.tuna.tsinghua.edu.cn/](https://mirrors.tuna.tsinghua.edu.cn/)

网易    [https://mirrors.163.com/](https://mirrors.163.com/)

阿里    [https://mirrors.aliyun.com/](https://mirrors.aliyun.com/)

搜狐    [https://mirrors.sohu.com/](https://mirrors.sohu.com/)

浙大    [https://mirrors.zju.edu.cn/](https://mirrors.zju.edu.cn/)

华为    [https://mirrors.huaweicloud.com/](https://mirrors.huaweicloud.com/)

## 3. centos7安装

### 3.1. 使用镜像地址下载最小可以用版本

中科大镜像下载地址举例：

[https://mirrors.ustc.edu.cn/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso](https://mirrors.ustc.edu.cn/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso)

其中，DVD版本和Mnimal版本，分别代表完整版和最小版，一般安装最小版。

### 3.2. 虚拟机安装配置

（1）控制中心主界面： 添加虚拟机，通过镜像文件安装，点继续

（2）镜像文件选择界面： 选择镜像文件，点继续

（3）输入账号界面：  取消快速安装，填入linux用户名和密码，点继续

（4）安装前预设界面： 修改虚拟机名称/安装地址，勾选“在Mac桌面上创建别名”，勾选“安装前预设”，点继续【必选安装前预设，才能进入虚拟机配置，详见下一步】

（5）虚拟机配置界面： 根据自身情况，配置各种参数。

::: tip 必做操作
硬件->图形->高级->取消3D加速->OK【如果不取消3D加速，进入安装过程中，会卡死在黑色代码页面】

安全性->开启密码【如果没有设置密码，安装开始前会提示“要执行此操作,您必须输入主机操作系统管理员的凭据”，接下来找不到镜像文件】
:::

（6）虚拟机配置完界面： 检查好上一步后，点继续

（7）安装选择界面：  选择Install CentOS 7，回车

（8）自动运行程序界面： 需要回车时，回车即可，直到进入语言选择画面

（9）语言选择界面：  选择中文，点继续

（10）安装信息摘要界面： 进入“软件选择”，配置最小化安装，点完成

（11）安装信息摘要界面： 进入“网络和主机名”，打开以太网，编辑主机名，点完成

（12）安装信息摘要界面： 进入“安装位置”，选择自动分区，点完成

（13）安装信息摘要界面： 点开始安装

（14）用户配置界面：  设置ROOT密码

### 3.3. `Parallels Tools`安装

系统安装完成后，登录root用户

（1）检查是否已经挂载Parallels Tools CD镜像，输入：

```sh
mount | grep iso9660
```

没有返回值或返回之中没有noexec，直接进入到第3步，

否则进入到第2步先卸载

（2）卸载镜像，输入：

```sh
umount /dev/cdrom
```

（3）挂载Parallels Tools安装光盘镜像，输入：

```sh
mount -o exec /dev/cdrom /media/cdrom
```

::: warning 注意
/dev/cdrom 是虚拟机的CD/DVD驱动器而/media/cdrom是该设备的挂载点。在某些Linux操作系统中，虚拟CD/DVD驱动器可能显示为/dev/hdb 而其挂载点为 /mnt/cdrom。部分 Linux 操作系统没有CD/DVD驱动器挂载点。在此情况下，应手动创建挂载点目录。
:::

（4）挂载完成后，进入到挂载目录，输入：

```sh
cd /media/cdrom
```

（5）使用root用户，进行程序安装：

```sh
sudo ./install
```

（6）安装完成后，重启虚拟机

### 3.4. 关机及防火墙

为了方便，记住立即关机命令：

```sh
shutdown -h now
```

为了不需要配置端口，直接关闭防火墙：

（1）停止防火墙服务：

```sh
sudo systemctl stop firewalld
```

（2）禁止防火墙开机自启动：

```sh
sudo systemctl disable firewalld
```

### 3.5. mac客户端连接

（1）设置客户端连接服务器的心跳为60s，防止连接丢失

输入编辑ssh文件命令：

```sh
sudo vim /etc/ssh/ssh_config
```

::: tip 在文件末尾添加
ServerAliveInterval 60

ServerAliveCountMax 3
:::

每60s发送一个，服务器没有响应连续3次，自动断开连接

（2）客户端连接服务器命令：

```sh
ssh root@服务器ip
```

（3）ftp工具下载地址：

[https://filezilla.net](https://filezilla.net)

---
---

### 3.6. 虚拟机梯子

* **3.6.1. 在虚拟机内查看ip，执行命令判断网关**

```sh
ip addr | grep inet | grep eth0
```

假设得到ip为`10.211.55.5`

* **3.6.2. 获取mac宿主机ip地址，执行如下命令**

```sh
ifconfig | grep 10.211.55
```

比如宿主机ip为`10.211.55.2`（不可使用`127.0.0.1`，否则无法共享梯子）

* **3.6.3. 开启梯子局域网连接**

在梯子的设置里，找到`局域网连接`，将其开启

* **3.6.4. 开启虚拟机梯子配置**

1. 打开梯子软件，**复制环境变量**（有的叫**终端代理命令**）

::: tip 修改代理ip

```console
export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897
```

将上述**IP**改成`10.211.55.2`

```console
export https_proxy=http://10.211.55.2:7897 http_proxy=http://10.211.55.2:7897 all_proxy=socks5://10.211.55.2:7897
```

:::

2. 修改~/.bash_profile

```sh
alias open_proxy='export https_proxy=http://10.211.55.2:7897 http_proxy=http://10.211.55.2:7897 all_proxy=socks5://10.211.55.2:7897'
alias close_proxy='unset http_proxy;unset https_proxy;unset all_proxy'
alias test_proxy='curl -v google.com'
```

```sh
source ~/.bash_profile
```

::: tip 注意
这里的端口号`7897`，取自宿主机的梯子
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
