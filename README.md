## Notes Apps API
RESTfull notes API uses Hapi.js. You can use this API for build simple notes app.


### HTTP verbs
- **GET**    : Used to retrieve a resource
- **POST**   : Used to create a new resource
- **PATCH**  : Used to update an existing resource, including partial updates
- **DELETE** : Used to delete an existing resource

### HTTP status codes
- **200 OK**          : The request completed successfully
- **201 Created**     : A new resource has been created successfully. The resource’s URI is available from the response’s Location header
- **204 No Content**  : An update to an existing resource has been applied successfully
- **400 Bad Request** : The request was malformed. The response body will include an error providing further information
- **404 Not Found**   : The requested resource did not exist

### Headers
- **Content-Type** : The Content-Type of the payload, e.g. application/hal+json


## Usage API
**POST** _/notes_

**Request Body**
```
{
    "title": "Judul Catatan",
    "tags": ["Tag 1", "Tag 2"],
    "body": "Konten catatan"
}
```
---
**GET** _/notes_

**Response 200**
```
{
"status": "success",
"data": {
    "notes": [
      {
        "id":"notes-V1StGXR8_Z5jdHi6B-myT",
        "title":"Catatan 1",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 1"
      },
    ]
}
```
---
**GET** _/notes/:id_

**Response 200**
```
{
    "status": "success",
    "data": {
        "note": {
            "id":"notes-V1StGXR8_Z5jdHi6B-myT",
            "title":"Catatan 1",
            "createdAt":"2020-12-23T23:00:09.686Z",
            "updatedAt":"2020-12-23T23:00:09.686Z",
            "tags":[
              "Tag 1",
              "Tag 2"
            ],
            "body":"Isi dari catatan 1"
        }
    }
}
```
---

**PUT** _/notes/:id_

**Request Body**
```
{
    "title":"Judul Catatan Revisi",
    "tags":[
      "Tag 1",
      "Tag 2"
    ],
    "body":"Konten catatan"
}
```

---

**DELETE** _/notes/:id_

**Response 200**
```
{
    "status": "success",
    "message": "Catatan berhasil diperbaharui"
}
```


### Example Response 
**Response 200**
```
{
    "status": "success",
    "message": "Catatan berhasil ditambahkan"
}
```

**Response 400**
```
{
    "status": "fail",
    "message": "Catatan gagal ditambahkan."
}
```


