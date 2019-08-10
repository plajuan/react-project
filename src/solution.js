/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    debugger
    let res=[]
    let tmp=[]
    let diff = 0    
    
    for(let i=0;i<nums.length;i++){
        diff=target-nums[i]
        console.log(tmp[diff])
        console.log(tmp[nums[i]])
        if(tmp[diff] != undefined && tmp[nums[i]] != undefined){
            res.push(tmp[diff])
            res.push(tmp[nums[i]])
            return res
        } else {
            tmp[diff] = i
        }
    } 
};

console.log(twoSum([3,2,4], 6))
