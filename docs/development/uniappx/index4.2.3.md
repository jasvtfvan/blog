# uni-app x android

::: tip 环境版本
macOS Monterey12.2 Intel

HBuilderX 4.23

Android Studio Koala | 2024.1.1 Patch 1
:::

官网地址: [https://doc.dcloud.net.cn/uni-app-x/](https://doc.dcloud.net.cn/uni-app-x/)

官网参考: [https://doc.dcloud.net.cn/uni-app-x/native/use/android.html](https://doc.dcloud.net.cn/uni-app-x/native/use/android.html)

## 1. java 环境切换

1. 安装不同版本`java`，具体步骤省略

2. 查看`bash_profile`

```bash
cat ~/.bash_profile
```

```console
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
export PATH="/Users/jasvtfvan/Documents/FullStack/flutter/bin:$PATH"
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_UUL=https://storage.flutter-io.cn
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator

export JMETER_HOME=/Users/jasvtfvan/Documents/PortableApplication/apache-jmeter-5.4
export JAVA_8_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
export JAVA_17_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home

export PATH=$JAVA_HOME/bin:$PATH:.:$JMETER_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JMETER_HOME/lib/ext/ApacheJMeter_core.jar:$JMETER_HOME/lib/jorphan.jar

alias jdk8='export JAVA_HOME=$JAVA_8_HOME'
alias jdk17='export JAVA_HOME=$JAVA_17_HOME'

export MAVEN_HOME=/Users/jasvtfvan/Documents/PortableApplication/apache-maven-3.8.5
export PATH=$PATH:$MAVEN_HOME/bin

export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles

alias open_proxy='export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897'
alias close_proxy='unset http_proxy;unset https_proxy;unset all_proxy'
alias test_proxy='curl -v google.com'
```

>`.bash_profile`和`.zshrc`相关权限说明,参考`node/nvm`和`go/gvm`

3. 查看`java`版本并切换至`java8`

可以不必切换到`java8`

```bash
java -version
jdk8
```

```console
java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```

## 2. HBuilderX 创建项目

### 2.1 下载安装

官网地址: [https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)

历史版本: [https://hx.dcloud.net.cn/Tutorial/HistoryVersion](https://hx.dcloud.net.cn/Tutorial/HistoryVersion)

下载`4.2.3`版本

### 2.2. 创建`uni-app x`项目

![创建项目](./images/HBuilderX-new-project.png)

绑定开发者账户后，自动生成`Appid`，并在开发者中心可以查看

### 2.3. 生成打包资源

![创建项目](./images/HBuilderX-build.png)

![创建项目](./images/HBuilderX-build1.png)

## 3. 开发者中心

官网地址: [https://dev.dcloud.net.cn](https://dev.dcloud.net.cn)

### 3.1. 管理应用

分别点击: 应用管理 -> 我的应用 -> 应用名称

![应用名称](./images/dcloud-application.png)

### 3.2. 创建云端证书

![创建证书](./images/dcloud-certificate.png)

创建完成后，点击`证书详情` -> `查看证书密码` -> `下载证书`

### 3.3. 生成离线打包key

1. 新增

![生成离线key](./images/dcloud-build-key.png)

2. 创建

![生成离线key](./images/dcloud-build-key1.png)

3. 查看

![生成离线key](./images/dcloud-build-key2.png)

## 4. 离线Android项目

### 4.1. 导入`Android Studio`

1. 下载地址: [https://nativesupport.dcloud.net.cn/AppDocs/download/android.html](https://nativesupport.dcloud.net.cn/AppDocs/download/android.html)

>注意，下载的版本号需要跟`HBuilderX`版本号一致

2. 导入项目，目录如下

![SDK目录](./images/android-sdk-project-1.png)

3. 修改`app`的`sdk`版本

![SDK版本](./images/android-studio-sdk-1.png)

这里`compileSdk`要切换到最高版本，然后`Apply`

![SDK版本](./images/android-studio-sdk1-1.png)

所有`Module`都需要参考app进行修改

### 4.2. 拷贝基础库包

将`Android-SDK@4.23.82121_20240704/SDK/libs/`目录下的
和`Android-uni-app-x-SDK@12048-4.24/SDK/libs/`目录下的

```console
// android-gif-drawable-1.2.28.aar
app-common-release.aar
app-runtime-release.aar
// breakpad-build-release.aar
dcloud-layout-release.aar
framework-release.aar
uni-exit-release.aar
uni-getAccessibilityInfo-release.aar
uni-getAppAuthorizeSetting-release.aar
uni-getAppBaseInfo-release.aar
uni-getDeviceInfo-release.aar
uni-getSystemInfo-release.aar
uni-getSystemSetting-release.aar
uni-openAppAuthorizeSetting-release.aar
uni-prompt-release.aar
uni-storage-release.aar
uts-runtime-release.aar
uni-rpx2px-release.aar
uni-theme-release.aar
```

拷贝到`app/libs/`目录下，删除`utsplugin-release.aar`

点击`File -> Sync Project With Gradle Files`

### 4.3. `uniappx-test`工程配置

1. 创建模块

分别点击: File -> New -> New Module... -> Android Library

![SDK版本](./images/android-studio-new.png)

::: info 选项信息
Module Name: uniappx-test

Package Name: com.example.uniappx_test

Language: Kotlin

Bytecode Level: 8

Minimum SDK: 21

Build configuration language: Groovy DSL(build.gradle)
:::

>`Package Name`要跟开发者中心的包名一致

>uniappx-test最低支持版本为21，Minimum SDK需要选择21及以上的版本

2. 配置`build.gradle`基本信息

修改uniappx-test模块下的build.gradle

![build.gradle](./images/uniappx-test-gradle.png)

```shell
android {
    ...
    defaultConfig {
        minSdk 21

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
        consumerProguardFiles "consumer-rules.pro"

        versionCode 1
        versionName '1.0.0'
        // noinspection ExpiredTargetSdkVersion
        targetSdk 21
    }
    ...
}

repositories {
    flatDir {
        dirs 'libs'
    }
}

dependencies {
    compileOnly fileTree(dir: '../app/libs', include: ['*.aar'])
...
}
```

修改后点击`build.gradle`右上角的`Sync`

>注意：使用`noinspection ExpiredTargetSdkVersion`忽略Google Play的报错，创建虚拟机时，不要创建`Google APIs`的
>所有`Module`的`build.gradle`都要添加该注释

### 4.4. 拷贝资源文件

1. 从`HBuilderX`拷贝静态资源到app主模块

![拷贝静态资源](./images/upiappx-test-assets.png)

>拷贝的文件夹要与`AndroidManifest.xml`中的`DCLOUD_UNI_APPID`的值保持一致

2. 从`HBuilderX`拷贝`kotlin`代码到`uniappx-test`模块下

![拷贝kotlin代码](./images/uniappx-test-kt.png)

>注意：不要破环java下原有目录结构

### 4.5. `app主模块`依赖更新

* 将`uniappx-test`添加到`app主模块`依赖

```console
dependencies {
    ...
    implementation project(':uniappx-test')
    ...
}
```

### 4.6. 打包apk

1. app主模块`build.gradle`

从开发者中心下载证书，获取相关信息，保存到项目根目录

```console
android {
    ...
    defaultConfig {
        applicationId "com.example.uniappx_test"
        ...
    }

    signingConfigs {
        config {
            keyAlias '__uni__d2ff1d0'
            keyPassword '开发者中心证书详情里拿到'
            storeFile file('../__UNI__D2FF1D0.keystore')
            storePassword '同keyPassword'
            v1SigningEnabled true //兼容v1
            v2SigningEnabled true //兼容v2
        }
    }

    buildTypes {
            debug {
                signingConfig signingConfigs.config
                ...
            }
            release {
                signingConfig signingConfigs.config
                ...
            }
    }
    ...
}
```

2. app主模块`Androidmanifest.xml`

```console
<meta-data android:name="DCLOUD_UNI_APPID" android:value="__UNI__D2FF1D0" />
<meta-data android:name="dcloud_appkey" android:value="开发者中心的离线打包key" />
```

3. app主模块`dcloud_control.xml`

```console
<hbuilder>
<apps>
    <app appid="__UNI__D2FF1D0" appver=""/>
</apps>
</hbuilder>
```

4. studio打包

`Build` -> `Generate Signed App Bundle / APK` -> `APK` -> 下图 -> Next -> Release

![keystore](./images/android-studio-keystore.png)

5. 打包后apk所在路径

`/app/release/app-release.apk`

## 5. HBuilderX 云打包

### 5.1. 生成`.keystore`

1. 查看`jdk`地址

```bash
/usr/libexec/java_home -V
```

```console
Matching Java Virtual Machines (3):
    17.0.10 (x86_64) "Oracle Corporation" - "Java SE 17.0.10" /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
    1.8.181.13 (x86_64) "Oracle Corporation" - "Java" /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
    1.8.0_181 (x86_64) "Oracle Corporation" - "Java SE 8" /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

2. 进入`JDK`所在目录

```bash
cd /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
```

3. 输入命令生成`.keystore`

```bash
sudo keytool -genkey -alias AAAAAA -keyalg RSA -validity 36500 -keysize 1024 -keystore java8.keystore -v
```

查看密钥信息(123456)

```bash
sudo keytool -list -v -keystore java8.keystore
```

### 5.2. 选择发行

![build-1](./images/HBuilderX-build-1.png)

### 5.3. 选择证书

当前选择`自定义证书`，也可以选择`云证书`（在开发者中心查看）

![build-2](./images/HBuilderX-build-2.png)

### 5.4. 下载`apk`

![build-3](./images/HBuilderX-build-3.png)

## 6. 开发调试

### 6.1. HBuilderX 真机调试

* `android掌上学习机`(android5.1.1)

1. android手机
Settings->System->Developer options->开启顶部总开关(On)->Debugging->开启USB debugging

2. HBuilderX
选中项目->运行->运行到手机或模拟器->运行到Android App基座

* `华为手机`（尚未成功）

1. android手机
手机设置->关于手机->版本号（连点5下开启开发者模式），在开发人员选项菜单里开启USB调试

2. MAC连接`android`设备，安装驱动助手（如：华为荣耀，安装手机助手）
根据步骤一步步连接

3. MAC打开`关于本机`->`系统报告`->`硬件/USB`->`USB 3.1 总线`
找到华为设备，复制`厂商ID`

4. 打开MAC终端，输入命令

```bash
echo 0x12d1 >> ~/.android/adb_usb.ini
```

5. 重启adb（HBuilderX）

### 6.2. HBuilderX引入原生插件

1. 配置依赖
