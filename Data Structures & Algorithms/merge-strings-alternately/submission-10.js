class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = "";
        const len = Math.max(word1.length, word2.length);
        let i = 0;
        while (i < len) {
            if (!word1[i]) {
                res += word2[i];
                i++;
                continue;
            }
            if (!word2[i]) {
                res += word1[i];
                i++;
                continue;
            }
            res += word1[i] + word2[i];
            i++;
        }
        return res;
    }
}
