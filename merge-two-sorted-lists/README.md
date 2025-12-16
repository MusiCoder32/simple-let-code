# Merge Two Sorted Lists（合并两个有序链表）

LeetCode 序号: 21 · 题目链接: https://leetcode.cn/problems/merge-two-sorted-lists/

问题：将两个升序单链表 `list1` 和 `list2` 合并为一个新的升序链表并返回。

- 节点结构：`{ val: number, next: Node | null }`
- 输入：`list1: Node | null`，`list2: Node | null`
- 输出：`Node | null`

示例：
- `list1 = 1->2->4`，`list2 = 1->3->4` → `1->1->2->3->4->4`
- `list1 = null`，`list2 = 0` → `0`

核心思路（双指针归并）：
- 使用虚拟头结点 `dummy` 与尾指针 `tail`；比较 `list1.val` 与 `list2.val`，将更小者接到 `tail` 后并前进其指针；某一方为空后，直接把另一方剩余部分接上。

复杂度：
- 时间 O(m+n)；空间 O(1) 额外

常见陷阱：
- 注意处理空链表输入（某一侧可能为 `null`）。
- 选择稳定：相等时先接 `list1` 可保持相对顺序（一般不严格要求）。

本题运行：

```bash
node merge-two-sorted-lists/test.js
```
