file=open("./jumin.html","r+")
text=file.readlines()
filtered = ""
for line in text:
    if "href" in line:
        filtered += line.strip() + "\n"
file.close();
print(filtered)
