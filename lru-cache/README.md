# LRU Cache（最近最少使用缓存）

LeetCode 序号: 146 · 题目链接: https://leetcode.cn/problems/lru-cache/

问题：设计并实现支持 `get(key)` 与 `put(key, value)` 的 LRU 缓存结构，两操作需要在 O(1) 时间内完成。当容量已满时，插入新键需要淘汰“最近最少使用”的键值对。

- 输入：容量 `capacity: number`，随后若干 `get/put` 操作
- 输出：`get` 返回值（不存在则返回 -1），`put` 无返回

示例序列：
```
capacity=2
put(1,1), put(2,2), get(1)->1, put(3,3) // 淘汰 key=2
get(2)->-1, put(4,4) // 淘汰 key=1
get(1)->-1, get(3)->3, get(4)->4
```

核心思路（哈希表 + 双向链表）：
- 哈希表 `key -> node` O(1) 查找；双向链表维护最近使用顺序，表头为最近使用，表尾为最久未使用。
- `get`/`put` 命中时把节点移动到表头；插入新键时放到表头；若超过容量，从表尾移除并在哈希中删除。

复杂度：
- 时间 O(1) 摊销；空间 O(capacity)

常见陷阱：
- 访问后一定要把节点移动到表头；淘汰的是表尾节点。
- 注意单个节点的前后指针正确维护，避免断链。

本题运行：

```bash
node lru-cache/test.js
```
