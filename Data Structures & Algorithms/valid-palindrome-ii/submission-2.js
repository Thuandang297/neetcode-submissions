class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        let checkDiff = false;
        const temp = [];
        while (left < right) {
            const first = s[left];
            const last = s[right];
            if (first === last) {
                left++;
                right--;
                continue;
            }
            if (checkDiff && temp.length == 0) return false;
            if (first == s[right - 1] && last === s[left + 1]) {
                temp.push(left, right--);
                left++;
                checkDiff = true;
                continue;
            }
            if (first == s[right - 1]) {
                right--;
            } else if (last === s[left + 1]) {
                left++;
            } else {
                if (temp.length == 0) {
                    return false;
                }
                left = temp[0];
                right = temp[1];
            }
            checkDiff = true;
        }
        return true;
    }
}
