from datetime import datetime

def naturals(n):
    result = []
    for i in range(2, n):
        prime_flag = True
        for j in range(2, i):
            if i % j == 0 and i != j:
                prime_flag = False
        if prime_flag == True:
            result.append(i)
    return result


if __name__ == "__main__":
    start = datetime.now()
    print(naturals(10000))
    end = datetime.now()
    print(f"{(end - start)}ms")