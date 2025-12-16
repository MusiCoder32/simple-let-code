# Kth Largest Element in an Array（数组中的第 K 大元素）

LeetCode 序号: 215 · 题目链接: https://leetcode.cn/problems/kth-largest-element-in-an-array/

问题：给定未排序数组 `nums` 和整数 `k`，返回数组中第 `k` 大的元素（第 1 大是最大值）。注意是“第 `k` 大”，不是“索引为 `k`”。

- 输入：`nums: number[]`，`k: number`（1 ≤ k ≤ nums.length）
- 输出：`number`

示例：
- `nums = [3,2,1,5,6,4], k = 2` → `5`
- `nums = [3,2,3,1,2,4,5,5,6], k = 4` → `4`

核心思路（快速选择 Quickselect）：
- 目标下标为 `target = nums.length - k`（升序下第 `target` 位）。
- 每次选择一个枢轴做分区，若枢轴位置 `p` 恰等于 `target`，返回该值；若 `p < target`，在右侧继续；否则在左侧继续。

复杂度：
- 平均时间 O(n)，最坏 O(n^2)（退化分区）；空间 O(1)

常见陷阱：
- 第 `k` 大对应的“升序索引”是 `n-k`，容易写错成 `k-1`。
- 若想规避最坏情况，可随机化枢轴或用堆（最小堆维持 k 个元素）。

本题运行：

```bash
node kth-largest-element-in-an-array/test.js
```# Kth Largest Element in an Array — 核心思路

思路：快速选择（Quickselect）。以分区函数将数组按基准值划分，定位到目标下标 `n-k` 的元素；若分区位置小于目标则向右继续，否则向左，平均 O(n)。

- 细节：原地分区，注意边界 `lo..hi`
- 复杂度：平均时间 O(n)，最坏 O(n^2)；空间 O(1)
