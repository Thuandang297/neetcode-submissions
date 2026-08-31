class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        const n = nums.length;
        if (n < 3) return result;

        nums.sort((a, b) => a - b);

        const map = new Map();
        for (let i = 0; i < n; i++) {
            map.set(nums[i], i);
        }

        for (let i = 0; i < n - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1; j < n - 1; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                const target = -(nums[i] + nums[j]);

                if (map.has(target) && map.get(target) > j) {
                    result.push([nums[i], nums[j], target]);
                }
            }
        }

        return result;
    }
}
