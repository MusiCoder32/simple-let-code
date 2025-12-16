# Longest Substring Without Repeating Characters（无重复字符的最长子串）

LeetCode 序号: 3 · 题目链接: https://leetcode.cn/problems/longest-substring-without-repeating-characters/

问题：给定字符串 `s`，请找出其中不含重复字符的最长子串的长度。

- 输入：`s: string`
- 输出：`number`

示例：
- `"abcabcbb"` → `3`（"abc"）
- `"bbbbb"` → `1`（"b"）
- `"pwwkew"` → `3`（"wke"）

核心思路（滑动窗口 + 索引表）：
- 维护左右指针 `[left, right]` 表示当前无重复窗口，哈希 `seen[ch]` 记录字符最近出现位置。
- 当 `s[right]` 在窗口内重复时，将 `left` 跳到 `max(left, seen[ch]+1)`，然后更新字符位置并维护最大长度。

复杂度：
- 时间 O(n)；空间 O(k)（k 为字符集大小）

常见陷阱：
- `left` 只能右移，且必须取最大；否则会回退导致错误。
- 字符可以是任意 ASCII/Unicode，Map 优于数组更通用。

本题运行：

```bash
node longest-substring-without-repeating-characters/test.js
```
# Longest Substring Without Repeating Characters — 核心思路

思路：滑动窗口。`left` 为当前窗口左边界，用哈希表记录字符最近出现位置。遇到重复字符 `ch` 时，将 `left` 跳到 `lastIndex(ch)+1`，持续维护最大窗口长度。

- 关键：`left` 只能右移且取 `max(left, lastIndex+1)`
- 复杂度：时间 O(n)，空间 O(k)（字符集大小）
