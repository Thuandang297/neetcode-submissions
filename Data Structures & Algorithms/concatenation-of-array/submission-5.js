class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length
        const array = new Array(len*2)
        for(let i=0;i<len;i++){
            array[i] = nums[i]
            array[i+len] = nums[i]
        }
        return array
    }
}
