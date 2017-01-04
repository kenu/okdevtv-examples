def parse(line):
    line = line.replace('&nbsp;', ' ')
    if '> ' in line and '</a>' in line:
        start = line.index('> ') + 2
        end = line.index('</a>')
        string = line[start:end]
        return string + "\n"
    else:
        return ''

file = open("./jumin.html","r+")
fout = open('./workfile.txt', 'w')
text=file.readlines()
filtered = ""
for line in text:
    check = ("changeBldInfo" in line)
    if check:
        filtered += parse(line)

fout.write(filtered)
file.close()
fout.close()
print(filtered)
