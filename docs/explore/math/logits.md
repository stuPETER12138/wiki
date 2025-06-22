# 对数概率

> 参考资料：[Log Probabilities](https://chrispiech.github.io/probabilityForComputerScientists/en/part1/log_probabilities/)

对数概率是以 $e$ 为底，概率 $P(E)$ 的对数：$\log P(E)$

而计算机中常用对数概率的主要原因有

1. 计算机受限于并表示非常小的数字。

    Python 无法表示比 2.225e-308 还小的数，但这个数的对数 -307 却可以轻易的存储在计算机中。

2. 通过对数，我们可以把乘法计算转换为加法。

    相比乘法运算，计算机对加法的运算更加高效。同时推导方程也会更容易书写：
    $$
    \log \prod_i P (E_i) = \sum_i \log P(E_i)
    $$