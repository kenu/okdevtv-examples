import json

string = '["foo", {"bar":["baz", null, 1.0, 2]}]'
jobj = json.loads(string)
print(jobj[1]['bar'])

result = """{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "8-17",
               "short_name" : "8-17",
               "types" : [ "political", "premise" ]
            },
            {
               "long_name" : "Gunyeollo 299(ibaekgusipgu)beo",
               "short_name" : "Gunyeollo 299(ibaekgusipgu)beo",
               "types" : [ "political", "sublocality", "sublocality_level_4" ]
            },
            {
               "long_name" : "Gunnam-myeon",
               "short_name" : "Gunnam-myeon",
               "types" : [ "political", "sublocality", "sublocality_level_2" ]
            },
            {
               "long_name" : "Yeoncheon",
               "short_name" : "Yeoncheon",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Gyeonggi-do",
               "short_name" : "Gyeonggi-do",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "South Korea",
               "short_name" : "KR",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "486-820",
               "short_name" : "486-820",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "8-17 Gunyeollo 299(ibaekgusipgu)beo, Gunnam-myeon, Yeoncheon, Gyeonggi-do, South Korea",
         "geometry" : {
            "location" : {
               "lat" : 38.08415919999999,
               "lng" : 127.0179441
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 38.08550818029149,
                  "lng" : 127.0192930802915
               },
               "southwest" : {
                  "lat" : 38.0828102197085,
                  "lng" : 127.0165951197085
               }
            }
         },
         "place_id" : "ChIJvXw8GGghfTUR19X2ydDXu_I",
         "types" : [ "political", "premise" ]
      }
   ],
   "status" : "OK"
}"""

obj = json.loads(result)
location = obj['results'][0]['geometry']['location']
print(str(location['lat']) + ',' + str(location['lng']))
