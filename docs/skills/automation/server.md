# Linux GPU 服务器常用命令语句指北

## 高分词汇

```bash
sudo
ls
ls -a
cd
mkdir
nvidia-smi
rm
rm -tf
```

## 名言警句

```bash
# 每隔 2s 更新一次，并强调更新内容
watch -n 2 -d nvidia-smi
# 查看当前文件夹内第一层文件的大小
du -h --max-depth=1 .
# 强制结束一个进程
kill -9 PID
# 解压文件
tar -zxvf xxx.tar.gz
tar -xvf xxx.tar
unzip xxx.zip
# 打包文件
tar -czvf xxx
# 查看全部进程的详细信息
ps -f -a
# 监控 GPU 状态
watch gpustat
# 优雅の监视工具
# pip install nvitop
nvitop
```

> [Linux 教程](https://www.runoob.com/linux/linux-tutorial.html)
>
> [【Linux】监控NVIDIA GPU显卡占用状态的命令](https://blog.csdn.net/wzk4869/article/details/139072182)
>
> [nvitop’s documentation](https://nvitop.readthedocs.io/en/latest/)