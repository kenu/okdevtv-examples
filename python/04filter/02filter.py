file = open("./jumin.html","r+")
fout = open('./workfile.txt', 'w')
text=file.readlines()
filtered = ""
for line in text:
    check = ("changeBldInfo" in line)
    if check:
        filtered += line.strip() + "\n"

fout.write(filtered)
file.close()
fout.close()
print(filtered)
