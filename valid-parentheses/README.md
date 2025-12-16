# Valid Parentheses（有效的括号）

LeetCode 序号: 20 · 题目链接: https://leetcode.cn/problems/valid-parentheses/

问题：给定只包含 `()[]{}` 的字符串 `s`，判断它是否为有效的括号序列。

- 有效规则：左括号必须以相同类型的右括号关闭，且先开后闭（正确嵌套）。
- 输入：`s: string`
- 输出：`boolean`

示例：
- `"()"` → `true`
- `"()[]{}"` → `true`
- `"(]"` → `false`；`"([)]"` → `false`
- `"{[]}"` → `true`

核心思路（栈）：
- 遍历字符，遇到左括号入栈；遇到右括号时，栈顶必须是对应的左括号，否则非法；遍历结束栈需为空。

复杂度：
- 时间 O(n)；空间 O(n)

常见陷阱：
- 空字符串应视为有效。
- 混合嵌套时应严格匹配最近的未闭合左括号（栈顶）。

本题运行：

```bash
node valid-parentheses/test.js
```
