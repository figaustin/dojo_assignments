def countdown(num):
    x = []
    for i in range(num,-1,-1):
        x.append(i)
    return x
print(countdown(5))

def print_and_return(list):
    print(list[0])
    return list[1]
print_and_return([1,2])

def first_plus_length(list):
    return list[0] + len(list)
print(first_plus_length([1,2,3,4,5]))

def values_greater_than_second(list):
    new_list = []
    for i in range(len(list)):
        if i > list[1]:
            new_list.append(i)
    print(len(new_list))
    return new_list
values_greater_than_second([5,2,3,2,1,4])

def length_and_value(size, value):
    list = []
    for i in range(size):
        list.append(value)
    return list
print(length_and_value(4,7))