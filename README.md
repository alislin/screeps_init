# screeps_init
screeps template

To create a new project based on this template using degit:
```shell
npx degit alislin/screeps_init screeps
cd screeps
```

init project
```shell
npm install
```

先在项目根目录下新建文件 `.secret.json` 并填入如下内容：

```json
{
    "main": {
        "token": "你的 screeps token 填在这里",
        "protocol": "https",
        "hostname": "screeps.com",
        "port": 443,
        "path": "/",
        "branch": "default"
    },
    "local": {
        "copyPath": "你要上传到的游戏路径，例如 C:\\Users\\DELL\\scripts\\screeps.com\\default"
    }
}
```

注意需要填写里边的 `main.token` 字段和 `local.copyPath` 字段（_如果你不想用这种方式的话可以直接不填_ ），token 可以从 [这里](https://screeps.com/a/#!/account/auth-tokens) 获取。copyPath 可以通过游戏客户端控制台左下角的 **Open local folder** 按钮找到。