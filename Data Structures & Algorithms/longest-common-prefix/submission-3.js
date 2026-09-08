class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
      strs.sort()
      const left = strs[0]
      const right = strs[strs.length - 1]
    let res = ''
      for(let i=0;i<left.length;i++){
        if(left[i] == right[i]){
            res+=left[i]
            continue
        } 
        break
        
      }
      return res
    }
}
