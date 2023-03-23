def containsDuplicates(nums):
    # Making sure that the values are different or the same
    noDuplicates = set(nums)
    
    # If the length of them are different it means that we have found duplicates
    if(len(noDuplicates) != len(nums)):
        return True 
    # if that's not the case we know that there's no duplicates
    else:
        return false



""" Time complexity : O(n) , where n is the length of the input list nums.

This is because the set operation used to remove duplciates has a time complexity of O(n)
as it requires iterating over the entire list to check for duplicates, and the subsquent 
comparison of the length of the original list and the set also has a time compleixty of O(n)

Space Complexity :  O(n) , as the set operation creates a new set with potentially all n elements
from the input list. However, the space complexity could be reduced to O(K), where k is the number of unique elements
in the input list, if we only added elements to the set until we found a duplicate

"""

# Improved version 

def containsDuplicates2(nums):

    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False 

"""This solution is better because k represents the number of unique elements in the input list. 
This is because the algorithm uses a set to keep track of only the unique elements seen so far, 
and the size of this set will be at most equal to the number of unique elements in the input list """
