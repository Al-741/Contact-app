# from faker import Faker


# fake = Faker()
# print(fake.phone_number())


#mettre das def populate et faire boucle avec
from flask import request 
result = request.get("https://randomuser.me/api/")  #si return 200 c'est bon

# Contact(result[""])
print(result.json())