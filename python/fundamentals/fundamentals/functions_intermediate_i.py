from os import sep


x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]


def update():
    x[1][0] = 15
    students[0]['laste_name'] = 'Bryant'
    sports_directory['soccer'][0] = 'Andres'
    z[0]['y'] = 30
    return x,students,sports_directory,z
print(update())


students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]


def iterateDictionary(list):
    for i in range(len(students)):
        print(list[i])

iterateDictionary(students) 


def iterateDictionary2(key_name,  list):
    for i in range(len(list)):
        print(list[i][key_name])
        
iterateDictionary2('last_name', students)


dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(dict):
    for i in dict:
        print(len(dict[i]),i)
        for j in dict[i]:
            print(j)
printInfo(dojo)
