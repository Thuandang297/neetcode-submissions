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

    for (let i = 0; i < n - 2; i++) {
        const curr = nums[i];

        if (curr > 0) break;
        if (i > 0 && curr === nums[i - 1]) continue;
        if (curr + nums[i + 1] + nums[i + 2] > 0) break;
        if (curr + nums[n - 1] + nums[n - 2] < 0) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = curr + nums[left] + nums[right];

            if (sum === 0) {
                result.push([curr, nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
    }
}
