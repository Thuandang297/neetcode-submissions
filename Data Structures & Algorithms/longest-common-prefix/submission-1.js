class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = strs[0].split('')
        for(let i of strs){
            if(i == result.join('')) continue
            const arr = i.split('')
            const newRe = []
            for(let j = 0;j<result.length;j++){
                if(result[j] === arr[j]){
                    newRe.push(result[j])
                }
                else{
                    break
                }
            }
            if(newRe.length === 0) return ""
            result = [...newRe]
        }
        return result.join('')
    }
}
