# IO

我们知道，CPU 和内存的速度远高于外设的速度。当我们要把 100MB 的数据写入磁盘时，CPU 输出 100MB 的数据只需要 0.01 秒，可是磁盘要接收这 100MB 数据可能需要10秒，为之奈何？

1. 让是 CPU 等着，程序暂停，等 100MB 的数据在 10 秒后写入磁盘，再接着执行，这种模式称为同步 IO；

2. CPU 不等待，只是告诉磁盘，“您老慢慢写，不着急，我接着干别的事去了“，于是，后续代码可以立刻接着执行，这种模式称为异步 IO。

## 异步 IO

> The forward logic is only about 10% og your code, everything else is 90%.
>
> -- Michael Stonebraker



