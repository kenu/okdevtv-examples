# hello.py
def helloFn(to=__name__):
    print(__name__)
    return "hello, %s" % to

if __name__ == "__main__":
    print helloFn("world")
