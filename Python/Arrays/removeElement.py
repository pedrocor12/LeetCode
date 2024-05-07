class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        n = len(nums)
        i = 0

        while(i < n):
            if nums[i] == val:
                nums[i], nums[n - 1] = nums[n - 1 ], nums[i]
                n -= 1
            else:
                i += 1
        return i 


# How to Solve the Problem:
# Since the problem explicitly states that we only care about values not equal to 'val',
# the solution involves swapping any element equal to 'val' with the last element of the current array.
# After swapping, we reduce the size of the array (n) to exclude the swapped value from further comparison.
# If the current element is not equal to 'val', we simply increment 'i', which tracks the count of non-'val' elements.
# The process continues until all elements have been checked.
# Time Complexity: O(n), as each element is checked once.
# Space Complexity: O(1), as the swaps are performed in-place without using additional storage.

