from typing import List

# Implementation of Bubble sort algorithm

def sort_list(unsorted_list: List[int]) -> List[int]:
    n = len(unsorted_list)
    for i in range(n - 1):
        swapped = False  # Add a flag to track if any swap happens
        for j in range(n - 1 - i):  # Optimized by ignoring the last i elements which are already in place
            if unsorted_list[j] > unsorted_list[j + 1]:
                unsorted_list[j], unsorted_list[j + 1] = unsorted_list[j + 1], unsorted_list[j]
                swapped = True
        if not swapped:  # No swaps means the list is already sorted
            break
    return unsorted_list

if __name__ == '__main__':
    unsorted_list = [int(x) for x in input().split()]
    res = sort_list(unsorted_list)
    print(' '.join(map(str, res)))

# Time complexity : O(n^2)
# Space complexity: O(1) because we are only swapping the j and j+1 if needed
