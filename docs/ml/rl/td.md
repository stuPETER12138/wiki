# TD 方法

蒙特卡洛方法只能用于回合制任务。而且当完成一个回合的时间很长时，蒙特卡洛方法也会消耗大量时间来更新价值函数。那么有没有一种不使用环境模型，而且每次行动时都会更新价值函数的方法呢？

> 有的兄弟，有的

时间差分方法（Temporal Difference, TD）：该方法不需要等待回合的结束，每过一定的时间就会进行策略的评估和改进。

## 评估策略

> TD 方法 = MC 方法 + DP 方法

$$
\begin{aligned}
v_\pi(s) &= \sum_{a, s'} {\pi}(a | s) p(s' | s,a) \left\{ r(s, a, s') + {\gamma}v_{\pi}(s') \right\} \\
&= \mathbb{E}_\pi \left[ {R_t + \gamma v_\pi(S_{t + 1})} \, | \, S_t = s  \right]
\end{aligned}
$$

具体来说，TD 方法只使用下一个行动和价值函数来更新当前的价值函数。

- 像 DP 方法一样，通过“自举”的方式就能依次更新价值函数。
- 像 MC 方法一样，无须了解环境相关的知识，使用采样数据就能对价值函数进行更新。

TD 方法的更新式如下所示：
$$
V_\pi'(S_t) = V_\pi(S_t) + \alpha \{ {R_t + \gamma V_\pi(S_{t + 1})} - V_\pi(S_t) \}
$$
其中，${R_t + \gamma v_\pi(S_{t + 1})}$ 叫做 TD 目标，TD 方法会朝着 TD 目标的方向更新 $V_\pi(S_t)$。

## 策略控制

### on-policy SARSA



### off-policy SARSA



## Q 学习
