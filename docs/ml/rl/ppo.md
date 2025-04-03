# Proximal Policy Optimization

主要思想是，在更新之后，新策略应该与旧策略相差不远。

## Generalized Advantage Estimator (GAE)

状态价值函数往往无法完全正确地评估策略的价值，因此我们得到的优势函数（动作价值函数与状态价值函数的差值）往往会有系统偏差。因此，引入 GAE 平衡采样带来的方差与价值函数得到的偏差之间的关系。
$$
A_\phi^{GAE} (s_t, a_t)
$$

## KL 散度

测评两个概率分布相似程度的指标叫做 KL 散度（Kullback-Leibler divergence）。
$$
D_{KL} (p(x) || q(x)) = \int p(x) \ln \frac{p(x)}{q(x)} \mathop{}\!\mathrm{d}x
$$
在一个局部邻域内，KL 散度近似对称。

## PPO

### PPO-Clip:

- 当 $A_\phi^{GAE} (s_t, a_t) > 0$ 时，说明当前动作更好，我们要提升策略，但要设置上界 $1+\epsilon$
- 当 $A_\phi^{GAE} (s_t, a_t) < 0$时，说明当前动作更差，我们要降低策略，但要设置下界 $1-\epsilon$

> 确保新策略不因为针对某些优秀动作概率的继续更新，与旧策略相差太大，而最终导致模型性能下降或训练不稳定性（所谓过犹不及）。

### PPO-Penalty

引入 KL 散度和超参数 $\beta$ 以寻求平衡。
