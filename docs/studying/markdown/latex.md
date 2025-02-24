# latex 语法指北

由于笔者较懒，一些公式/表达式的详细语法请读者在 [GitHub](https://github.com/stuPETER12138/stuPETER12138.github.io/blob/main/hope_docs/studying/markdown/latex.md) 上查阅。

### 引用公式

- 行内公式 `$`
- 独立公式 `$`
- 公式加边框 `\boxed{}`

### 特殊转义字符

`# $ ~ _ ^ \ { } %` 这些字符在md中有特殊的意义，在需要使用时，需要进行转义。
即：在这些字符前添加 `\`

### 希腊字母

$A$ $\alpha$
$B$ $\beta$
$\Gamma$ $\gamma$
$\Delta$ $\delta$
$E$ $\epsilon$
$Z$ $\zeta$
$\Theta$ $\theta$
$I$ $\iota$
$K$ $\kappa$
$\Lambda$ $\lambda$
$M$ $\mu$
$N$ $\nu$
$\Xi$ $\xi$
$O$ $\omicron$
$\Pi$ $\pi$
$P$ $\rho$
$\Sigma$ $\sigma$
$T$ $\tau$
$\Upsilon$ $\upsilon$
$\Phi$ $\phi$
$X$ $\chi$
$\Psi$ $\psi$
$\Omega$ $\omega$

### 上下标

例如：
$x^2$
$x_2$
$x_i^{10}$

### 根号、分数、括号、矢量与统计学符号

1. 根号：
	- $\sqrt[a]{b}$
2. 分数：
	- $\frac {a+c}{b}$
	- $a+b\over c+d$
3. 括号：
	- 小括号，中括号：( )[ ]  保持原样即可
	- 大括号：[[#特殊转义字符]]
	- 尖括号（左右单书名号）：$\langle x \rangle$
	- 向上取整与向下取整：$\lceil x \rceil$ $\lfloor x \rfloor$ 
		- 注意括号大小问题，比较以下两个符号：
			$(\frac {\frac 1 2} 2)$
			$\left( \frac {\frac 1 2} 2 \right)$
 4. 矢量：
	 - $\vec{a}$
5. 统计学符号：
	- $\overline{a}$
	- $\widehat{y}$

### 数学运算符

1. 二元运算符
	$x \times y$
	$x \div y$
	$\vec{x} \cdot \vec{y}$
2. 二元关系符
	$x \ge y$
	$x \le y$
	$x \approx y$
	$x \ne y$

### 省略号、空白间隔、分界符

1. 省略号：
	- $x_1, x_2, \dots, x_n$
	- $1, 2, \cdots, n$
	- $\vdots$ 和 $\ddots$ （一般用于矩阵中
2. 空白间隔
	- $\Box \quad \Box$ `$\quad$` 
	- 
	- $\Box \hspace{1cm} \Box$ `\hspace{长度}`
1. 分界符
	$\lgroup \rgroup$ $\lmoustache \rmoustache$ 

### 插入文本

$\text{存在} x>0 \text{，有} f(x) \ge 0$

### 字体、颜色

1. 公式默认字体（意大利体）：
	$\it{Hello, markdown!}$
2. 黑板粗体：
	$\mathbb{ABCDEFG}$
3. 黑体：
	$\mathbf{HIJKLMN}$
4. 打印机字体：
	$\mathtt{OPQRST}$
5. 颜色：
	`{\color{颜色} 文字或公式}` 或者 `{\textcolor{颜色} 文字或公式}`
	$a + \color{red}{b} \textcolor{green}{+ c}$  

### 多行公式

使用`aligned`环境：
$$
\begin{aligned}
\cos(2\theta) &= \cos^2(\theta) - \sin^2(\theta) \\
&= 2\cos^2(\theta) - 1
\end{aligned}
$$

### 分段函数/方程组

`&` 表示对齐，`\\` 用来换行，`\qquad` 可以表示空格
$$\it
f(x)=\begin{cases}
x^2+1 & x>0 \\
1 & x=o \\
-x^2+1 & x<0
\end{cases}
$$

### 大型数学运算符

- $\sum$  $\int$  $\iint$  $\iiint$  $\lim$  $\prod$ $\cdots \cdots$ 
1. 运算分的上下限：
	$\sum_0^\infty$
	$\int_{-\infty}^{\infty}$
	$\lim_{n\to{\infty}}\frac {sin(n^2)}n$
2. `\to` 表示趋近于箭头
3. 合理的的显示模式
	- 行内： 
		$\frac{1}{x}$ and $\displaystyle \frac{1}{x}$
		$\int_0^{\infty} f(x) \mathop{}\!\mathrm{d} x$ and $\displaystyle \int_0^{\infty} f(x) \mathop{}\!\mathrm{d} x$

	- 行间：
		$$\int \frac{\mathop{}\!\mathrm{d} x}{x} = \ln(x) + C$$

		和

	    $$\textstyle \int \frac{\mathop{}\!\mathrm{d} x}{x} = \ln(x) + C$$


### 箭头

- $\leftarrow$
- $\Rightarrow$
- $\xrightarrow[x>y]{x+y}$
- $\Longleftrightarrow$

### 矩阵

$$
B = \begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
$$
$$
A = \begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{vmatrix}
$$
$$
[C\ x] = \begin{bmatrix}
\begin{array}{c c | c}
a & b & x_1 \\
c & d & x_2
\end{array}
\end{bmatrix}
$$

### 宏
