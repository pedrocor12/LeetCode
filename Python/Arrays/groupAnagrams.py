s = "A man, a plan, a canal: Panama"
s = s.replace(" ", "")
solution = []

for i in s:
    if (i.isalpha() == True):
        solution.append(i.lower())

print("".join(solution) == "".join(solution)[::-1])
