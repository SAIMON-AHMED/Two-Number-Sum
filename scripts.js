/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let potentialMatch = target - nums[i];
        if (potentialMatch in hashMap) {
            return [hashMap[potentialMatch], i];
        } else {
            hashMap[nums[i]] = i;
        }
    }
};
