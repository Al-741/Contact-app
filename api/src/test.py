# from faker import Faker


# fake = Faker()
# print(fake.phone_number())

#mettre das def populate et faire boucle avec
from flask import request
import requests
import json
result = requests.get("https://randomuser.me/api/")  #si return 200 c'est bon
#print(result.status_code)

data = result.text
parse_json = json.loads(data)
email = parse_json['results'][0]['picture']['thumbnail']
print(email)
print(data)

"""import requests
import json
response_API = requests.get('https://api.covid19india.org/state_district_wise.json')
#print(response_API.status_code)
data = response_API.text
parse_json = json.loads(data)
active_case = parse_json['Andaman and Nicobar Islands']['districtData']['South Andaman']['active']
print("Active cases in South Andaman:", active_case)
print(data)"""

# Contact(result[""])
#print(result.json())