# Coin Change（零钱兑换）

LeetCode 序号: 322 · 题目链接: https://leetcode.cn/problems/coin-change/

问题：给定不同面额的硬币数组 `coins` 和总金额 `amount`，求凑成总金额所需的最少硬币个数；若无法凑出，返回 `-1`。每种硬币可以使用无限次。

- 输入：`coins: number[]`，`amount: number`
- 输出：`number`

示例：
- `coins = [1,2,5], amount = 11` → `3`（5+5+1）
- `coins = [2], amount = 3` → `-1`

核心思路（完全背包 DP）：
- 定义 `dp[x]` 为凑出金额 `x` 的最少硬币数；初始化 `dp[0] = 0`，其余为 `Infinity`。
- 遍历每个硬币 `coin`，再遍历金额 `x` 自 `coin..amount`：`dp[x] = min(dp[x], dp[x-coin] + 1)`。

复杂度：
- 时间 O(n·amount)（n 为硬币种类数）；空间 O(amount)

常见陷阱：
- 忘记把不可达状态初始化为 `Infinity` 会导致错误最小值。
- 循环顺序保证“可重复使用”，因此金额从小到大递推。

本题运行：

```bash
node coin-change/test.js
```