class Solution:
    def calPoints(self, operations: List[str]) -> int:
        score_stack = []

        for operation in operations:
            if operation == "+" and len(score_stack) >= 2:
                summed = score_stack[-2] + score_stack[-1]
                score_stack.append(summed)

            elif operation == "D" and len(score_stack) >= 1:
                doubled = score_stack[-1] * 2
                score_stack.append(doubled)
            
            elif operation == "C" and len(score_stack) >= 1:
                score_stack.pop()

            else: 
                score_stack.append(int(operation))

        return sum(score_stack)

# Time complexity : O(n)
# Space complexity : O(n)
