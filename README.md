# LMAPI

# Endpoint

## /person
### GET /
 Ritorna tutti i person salvati: 
 ```json
[
    {
        "preferredWorkshops": [],
        "_id": "612fad12a0379fed576f4f8f",
        "email": "metmiot98@gmail.com",
        "password": "1c7f51876e9b1aeed258aab81c34beb0998ffa92",
        "name": "Matteo",
        "surname": "Miotello",
        "birthDate": "06/04/1998",
        "phone": 3923400686,
        "__v": 0
    },
    {
        "_id": "612ff1300437508cd2f5424f",
        "email": "cusas@gmail.com",
        "password": "1c7f51876e9b1aeed258aab81c34beb0998ffa92",
        "name": "Mario",
        "surname": "Coglione",
        "birthDate": "06/04/1998",
        "phone": 3923400686,
        "__v": 0,
        "preferredWorkshops": [
            "612fa6b9e1550910d543a690",
            "612fa6b9e1550910d543a690"
        ]
    }
]
```

### GET /preferredWorkshops/:personId

Ritorna i workshop preferiti di un person:
```json
    {
  "preferredWorkshops": [
    {
      "_id": "612fa6b9e1550910d543a690",
      "name": "Vicenza",
      "email": "vicenza@gmail.com",
      "city": "Vicenza",
      "country": "Italy",
      "state": "Vicenza",
      "zip": 36100,
      "__v": 0,
      "address": "via roma"
    }
  ]
}
```

###POST /create

Crea un nuovo person, il body della richiesta deve avere questa struttura:
```json
{
  "email": "metmiot98@gmail.com",
  "password": "1c7f51876e9b1aeed258aab81c34beb0998ffa92",
  "name": "Matteo",
  "surname": "Miotello",
  "birthDate": "06/04/1998",
  "phone": 3923400686
}
```

###POST /addPreferredWorkshop/:personId
Aggiunge un workshop preferito al person, la richiesta deve contenere l'id del workshop da aggiungere

```json
{
    "workshop": "612fa6b9e1550910d543a690"
}
```

##/booking

###GET / 
Ritorna tutte le prenotazioni salvate:

```json
[
    {
        "_id": "612fa9fa25f8b467a66e2d6b",
        "date": "2021-01-09T00:00:00.000Z",
        "vehicle": {
            "_id": "612f9d67b58e75055ea0cfbd",
            "plate": "HS300XC",
            "maker": "Alfa Romeo",
            "model": "Giulia",
            "year": 2020,
            "__v": 0
        },
        "workshop": {
            "_id": "612fa6b9e1550910d543a690",
            "name": "Vicenza",
            "email": "vicenza@gmail.com",
            "city": "Vicenza",
            "country": "Italy",
            "state": "Vicenza",
            "zip": 36100,
            "__v": 0,
            "address": "via roma"
        },
        "bookingType": "Oil change",
        "__v": 0
    }
]
```

###GET /details/:id

Ritorna i dettagli di una specifica prenotazione:

```json
{
    "_id": "612fa9fa25f8b467a66e2d6b",
    "date": "2021-01-09T00:00:00.000Z",
    "vehicle": {
        "plate": "HS300XC"
    },
    "workshop": {
        "name": "Vicenza",
        "email": "vicenza@gmail.com",
        "city": "Vicenza",
        "country": "Italy",
        "state": "Vicenza",
        "zip": 36100,
        "__v": 0,
        "address": "via roma"
    },
    "bookingType": "Oil change"
}
```
###GET /all

Ritorna tutte le prenotazioni con informazioni essenziali

```json
[
    {
        "_id": "612fa9fa25f8b467a66e2d6b",
        "date": "2021-01-09T00:00:00.000Z",
        "workshop": {
            "name": "Vicenza",
            "city": "Vicenza"
        },
        "bookingType": "Oil change"
    }
]
```

###POST /create

Crea una nuova prenotazione, la richiesta deve contenere un JSON come questo:

```json
 {
        "date": "2021-01-09T00:00:00.000Z",
        "vehicle": "612f9d67b58e75055ea0cfbd",
        "workshop": "612fa6b9e1550910d543a690",
        "bookingType": "Oil change",
    }
```
