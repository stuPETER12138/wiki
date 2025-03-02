# 贝尔曼方程

## 认识贝尔曼方程

> 前置知识：概率与期望

我们假设环境是确定性的，而且智能代理的行动也是确定性的，那么状态价值函数就可以（靠数学式）手动算出。但如果智能代理的行动是随机的呢？

此时就需要贝尔曼方程（Bellman equation）。
$$
\begin{aligned}
v_{\pi}(s) &= \mathbb{E}_{\pi} [G_t | S_t = s] \\
&= \mathbb{E}_{\pi} [R_t + {\gamma} G_{t + 1} | S_t = s] \\
&= \mathbb{E}_{\pi} [R_t | S_t = s] + {\gamma} \mathbb{E}_{\pi} [G_{t + 1} | S_t = s] \\
&= \sum_{a, s'} {\pi}(a | s) p(s' | s,a) r(s, a, s') + {\gamma} \sum_{a, s'} {\pi}(a | s) p(s' | s, a) v_{\pi}(s') \\
&= \sum_{a, s'} {\pi}(a | s) p(s' | s,a) \left\{ r(s, a, s') + {\gamma}v_{\pi}(s') \right\}
\end{aligned}
$$
贝尔曼方程是表示状态 $s$ 的价值函数和下一个可能状态 $s'$ 的价值函数之间关系的式子。这个方程对所有状态 $s$ 和所有策略 $\pi$ 都成立。

## 行动价值函数

行动价值函数（action-value function）也被习惯性德称为“Q-函数”（Q-function）。
$$
\begin{aligned}
q_{\pi}(s, a) &= \mathbb{E}_{\pi} [ G_t | S_t = s, A_t = a ] \\
&= \sum_{s'} p(s' | s,a) \Big\{ r(s, a, s') + {\gamma} \sum_{a} {\pi}(a' | s') q_{\pi}(s', a') \Big\}
\end{aligned}
$$
Q 函数在时刻 $t$ 的状态 $s$ 下采取行动 $a$，并从 $t+1$ 时刻才开始根据策略 $\pi$ 采取行动。

**与状态价值函数的区别？**

在状态价值函数中，行动是根据策略选择的。而Q函数的行动选择是随机的。

## 贝尔曼最优方程

贝尔曼方程是对策略 $π$ 成立的方程。但我们最终想要求出的是最优策略。最优策略是使所有状态下的状态价值函数最大化的策略。因此需要对最优策略成立的方程，即贝尔曼最优方程（Bellman optimality equation）。
$$
v_*(s) = \max_a \sum_{s'} p(s' | s,a) \left\{ r(s, a, s') + {\gamma}v_*(s') \right\}
$$

$$
q_*(s, a) = \sum_{s'} p(s' | s,a) \Big\{ r(s, a, s') + {\gamma} \max_{a'} q_*(s', a') \Big\}
$$

## 最优策略

如果我们知道最优行动价值函数（optimal action-value function）$q_{*}(s, a)$，通过 $\arg\max$ 返回最大值的参数（这里为行动 $a$），我们就可以选择使 $q_{*}(s, a)$ 成为最大值的行动。这个行动的选择就是最优策略。
$$
\begin{aligned}
\mu_*(s) &= \mathop{\arg\max}_a \, q_*(s, a) \\
&= \mathop{\arg\max}_a \sum_{s'} p(s' | s,a) \left\{ r(s, a, s') + {\gamma}v_*(s') \right\}
\end{aligned}
$$
