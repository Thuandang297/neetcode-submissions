class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
      let res = ''
  const w1ln = word1.length
  const w2ln = word2.length
  const len = w1ln > w2ln ? w1ln : w2ln
  let i = 0
  while (i < len) {
    if (!word1[i]) {
      res += word2[i]
      i++
      continue
    }
    if (!word2[i]) {
      res += word1[i]
      i++
      continue
    }
    res += word1[i] + word2[i]
    i++
  }
  return res
    }
}
