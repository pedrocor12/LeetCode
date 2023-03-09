# Given an array of integers nums and an integer target, 
# return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly
# one solution, and you may not use the same element twice.
# You can return the answer in any order.

class Solution:
    def twoSum(self, nums, target) :
        solution = []
        start,end = 0, 1  
        while end < len(nums):
            if(nums[start] + nums[end] == target):
                solution.append(start)
                solution.append(end)
            start+=1
            end+=1
        return solution

nums = [1,3,4,6]
