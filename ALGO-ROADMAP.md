# 京东前端 3 天必刷算法清单

本清单在仓库根目录为每道题建立独立文件夹，包含：
- README.md：核心思路与复杂度
- solution.js：可复用的解法函数/类
- test.js：最小可跑的用例（Node.js）

运行全部题目的测试：

```bash
npm test
```

若未安装 Node.js，可先安装（Ubuntu）：

```bash
sudo apt update
sudo apt install -y nodejs npm
node -v && npm -v
```

---

## Day 1（入门与高频）

1) two-sum（Two Sum，哈希表 O(n)）
2) valid-parentheses（Valid Parentheses，栈 O(n)）
3) merge-two-sorted-lists（双指针/链表 O(m+n)）

## Day 2（BFS/DFS 与 DP）

4) binary-tree-level-order-traversal（队列/BFS O(n)）
5) number-of-islands（DFS 沉岛法 O(RC)）
6) coin-change（完全背包 DP O(n·amount)）

## Day 3（滑窗/选择/设计）

7) longest-substring-without-repeating-characters（滑动窗口 O(n)）
8) kth-largest-element-in-an-array（快速选择 O(n) 平均）
9) lru-cache（哈希+双向链表 O(1) 操作）

建议节奏：
- 上午复盘思路+边界；下午手写实现；晚上复杂度与常见坑总结。
- 口述一遍解题过程，模拟面试表达。
