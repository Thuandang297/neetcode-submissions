class Solution {
    /**
     * @param {number[]} prices
     * [10,3,5,6,2,1,15]
     * 10,3
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
            r = 0,
            p = 0,
            max = 0,
            n = prices.length;
        if (n == 0) return 0;
        for (let i = 0; i < n; i++) {
            p = prices[r] - prices[l];
            //find the new minimum number
            if(p<0){
                l = r;
            }
            //find the 
            if(p> max){
                max = p
            }
            r++;
        }
        return max
    }
}
