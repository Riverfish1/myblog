var mockedData = [
    {
        "_id" : ObjectId("58801c16a7a7a01f6c1fcdd5"),
        "name" : "yujian666",
        "password" : "34cdf7994645b6df4876e527d9df06792f8ffc34",
        "gender" : "m",
        "bio" : "12121212"
    }
]
for(var i = 0 ; i < mockedData.length; i++){
    var cur = mockedData[i];
    db.getCollection('users').insert(cur)
}







