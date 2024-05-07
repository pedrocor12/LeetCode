class Solutions:
    def removeDuplicates(self, nums:List[int]) -> int:
        L = 1 

        for R in range(1, len(nums)):
            if nums[R] = nums[R - 1]:
                nums[L] = nums[R]
                L += 1 

        return L   

# How to solve the problem:

# Right_pointer and Right_pointer - 1, check if the the values are unique.
# If the value is unique it means it will be in the front.
# so we swap the front value to the left_pointer which is at starting position
# and we increment it , meaning that left keeps track of unique values.

# Time complexity : O(n) 
# Space complexity : O(1)
