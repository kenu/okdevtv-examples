file=open("./Sneetches.txt","r+")
text=file.read()
# file=open("./star.txt","r+")
wordcount={}
for word in text.split():
    if word not in wordcount:
        wordcount[word] = 1
    else:
        wordcount[word] += 1
print(wordcount)
file.close();
