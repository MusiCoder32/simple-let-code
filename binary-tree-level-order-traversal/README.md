# Binary Tree Level Order Traversal（层序遍历二叉树）

LeetCode 序号: 102 · 题目链接: https://leetcode.cn/problems/binary-tree-level-order-traversal/

问题：给定二叉树根节点 `root`，返回其节点值的层序遍历（自上而下、逐层从左到右），输出为二维数组。

- 节点结构：`{ val: number, left: Node|null, right: Node|null }`
- 输入：`root: Node | null`
- 输出：`number[][]`

示例：
```
		3
	 / \
	9  20
		/  \
	 15   7
```
输出：`[[3],[9,20],[15,7]]`

核心思路（BFS 队列）：
- 将根节点入队，循环处理队列：每次记录当前层的队列长度 `size`，弹出 `size` 个节点并收集其值，同时把对应的左右子节点入队，完成一层后把该层数组加入结果。

复杂度：
- 时间 O(n)；空间 O(n)

常见陷阱：
- 空树应返回空数组 `[]`。
- 注意一层结束边界（用固定的 `size` 控制）。

本题运行：

```bash
node binary-tree-level-order-traversal/test.js
```
# Binary Tree Level Order Traversal — 核心思路

思路：BFS 按层遍历。用队列保存当前层节点，循环弹出并压入其左右子节点，逐层收集值。

- 结构：二叉树（`{ val, left, right }`）
- 复杂度：时间 O(n)，空间 O(n)
