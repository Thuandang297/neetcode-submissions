class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = [];
        const minLen = Math.min(word1.length, word2.length);
        for (let i = 0; i < minLen; i++) {
            res.push(word1[i], word2[i]);
        }
        const tail = word1.length > minLen ? word1.slice(minLen) : word2.slice(minLen);
        return res.join("") + tail;
    }
}
