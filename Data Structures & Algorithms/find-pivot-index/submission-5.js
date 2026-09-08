class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const sum = nums.reduce((sum, item)=>(sum = item+sum))
        let l = 0
       
       for(let i = 0;i< nums.length;i++){
        const r = (sum - nums[i] - l)
        if(l===r){
            return i
        }
        l+=nums[i]
       }
       return -1
    }
}
