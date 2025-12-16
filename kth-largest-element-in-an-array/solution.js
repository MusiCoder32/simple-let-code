function findKthLargest(nums, k) {
  const target = nums.length - k;

  function partition(lo, hi) {
    const pivot = nums[hi];
    let idx = lo;
    for (let i = lo; i < hi; i++) {
      if (nums[i] <= pivot) {
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
        idx++;
      }
    }
    [nums[idx], nums[hi]] = [nums[hi], nums[idx]];
    return idx;
  }

  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const p = partition(lo, hi);
    if (p === target) return nums[p];
    if (p < target) lo = p + 1; else hi = p - 1;
  }
  return -1;
}

module.exports = findKthLargest;
