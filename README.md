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

### post /login/:email

deve contenere il seguente json:

```json
{
  "email": "mail@gmail.com",
  "password": "1c7f51876e9b1aeed258aab81c34beb0998ffa92"
}
```

Risponde con i dettagli del person loggato se i dati sono corretti:

```json
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
}
```

Risponde con il seguente JSON se non sono corretti:

```json
{
  "success": false,
  "error": "some error"
}
```

### GET /details/:id

Ritorna i dettagli di un person:

```json
{
  "_id": "6130006182c2a77cef32029a",
  "email": "metmiot98@gmail.com",
  "password": "1c7f51876e9b1aeed258aab81c34beb0998ffa92",
  "name": "Matteo",
  "surname": "Miotello",
  "birthDate": "06/04/1998",
  "phone": 3923400686,
  "__v": 0
}
```

### GET /defaultWorkshop/:personId

Ritorna il workshop default:

```json
{
  "_id": "612fa6b9e1550910d543a690",
  "name": "Officina Seria Ma Non Troppo",
  "email": "vicenza@gmail.com",
  "city": "Vicenza",
  "country": "Italy",
  "state": "Vicenza",
  "zip": 36100,
  "__v": 0,
  "address": "via roma",
  "phone": "+393423573491"
}
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

### PATCH /changePassword/:id

Modifica la password dell'utente con id, la richiesta deve contenere un questo tipo di JSON:

```json
{
  "oldPassword": "b133a0c0e9bee3be20163d2ad31d6248db292aa6dcb1ee087a2aa50e0fc75ae2",
  "newPassword": "21d19e923ae21043fa5810704eab55bda682dc9e036bbf4c50eb732febdff835"
}
```

### POST /create

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

### POST /addPreferredWorkshop/:personId

Aggiunge un workshop preferito al person, la richiesta deve contenere l'id del workshop da aggiungere

```json
{
  "workshop": "612fa6b9e1550910d543a690"
}
```

### PATCH /

### POST /defaultWorkshop/:personId

Aggiunge/modifica il workshop default e ritorna l'id del workshop inserito, altrimenti ritorna un errore:

JSON di richiesta:

```json
{
  "defaultWorkshop": "612fa6b9e1550910d543a690"
}
```

JSON di risposta in caso di errore:

```json
{
  "success": false,
  "error": "error message"
}
```

## /booking

### GET /

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
    "bookingType": "613217e0dc68be74e7fbcf33",
    "__v": 0
  }
]
```

### GET /details/:id

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

### GET /all

Ritorna tutte le prenotazioni con informazioni essenziali

```json
[
  {
    "_id": "61321926dc68be74e7fbcf3c",
    "date": "2021-01-09T00:00:00.000Z",
    "workshop": {
      "name": "Officina Seria Ma Non Troppo",
      "city": "Vicenza"
    },
    "bookingType": {
      "name": "Oil Change"
    }
  }
]
```

### POST /create

Crea una nuova prenotazione, la richiesta deve contenere un JSON come questo:

```json
 {
  "date": "2021-01-09T00:00:00.000Z",
  "vehicle": "612f9d67b58e75055ea0cfbd",
  "workshop": "612fa6b9e1550910d543a690",
  "person": "6130006182c2a77cef32029a",
  "bookingType": "613217e0dc68be74e7fbcf33"
}
```

### DELETE /delete/:id

Elimina un booking, nel caso di successo torna un JSON contenente il veicolo appena eliminato altrimenti ritorna:

```json
{
  "success": false,
  "error": "error message"
}
```

## Workshop

### GET /

Ritorna tutti i workshop disponibili

```json
[
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
```

### GET /find/:text

Permette di cercare tramite testo in tutti i campi di un workshop il testo riportato

Ritorna il JSON del workshop risultante

### POST /create

Crea un nuovo workshop, la richiesta deve contenere questo JSON:

```json
{
  "name": "Vicenza",
  "email": "vicenza@gmail.com",
  "city": "Vicenza",
  "country": "Italy",
  "state": "Vicenza",
  "zip": 36100,
  "address": "via roma"
}
```

### DELETE /delete/:id

Elimina un workshop, nel caso di successo torna un JSON contenente il veicolo appena eliminato altrimenti ritorna:

```json
{
  "success": false,
  "error": "error message"
}
```

## Vehicle

### GET /

Ritorna tutti i workshop disponibili

```json
[
  {
    "_id": "612f9c745a1773e2bdafa8b1",
    "plate": "FJ300GZ",
    "maker": "FJ300GZ",
    "model": "Mito",
    "year": 2015,
    "__v": 0
  },
  {
    "_id": "612f9d67b58e75055ea0cfbd",
    "plate": "HS300XC",
    "maker": "Alfa Romeo",
    "model": "Giulia",
    "year": 2020,
    "__v": 0
  }
]
```

### /personal/:personId

Cerca i veicoli di un person

```json
[
  {
    "_id": "612f9c745a1773e2bdafa8b1",
    "plate": "FJ300GZ",
    "maker": "FJ300GZ",
    "model": "Mito",
    "year": 2015,
    "__v": 0
  },
  {
    "_id": "612f9d67b58e75055ea0cfbd",
    "plate": "HS300XC",
    "maker": "Alfa Romeo",
    "model": "Giulia",
    "year": 2020,
    "__v": 0
  }
]
```

### POST /create

Crea un nuovo veicolo, la richiesta deve contenere questo JSON:

```json
{
  "plate": "FJ300GZ",
  "maker": "FJ300GZ",
  "model": "Mito",
  "year": "2015"
}
```

### DELETE /delete/:id

Elimina un veicolo, nel caso di successo torna un JSON contenente il veicolo appena eliminato altrimenti ritorna:

```json
{
  "success": false,
  "error": "error message"
}
```

## Rental

### GET /

Ritorna tutti i rental

```json
[
  {
    "_id": "6131ed38729fdd35a175ebf6",
    "installment": 10,
    "vehicle": {
      "_id": "612f9d67b58e75055ea0cfbd",
      "plate": "HS300XC",
      "maker": "Alfa Romeo",
      "model": "Giulia",
      "year": 2020,
      "__v": 0
    },
    "person": {
      "_id": "6130006182c2a77cef32029a",
      "email": "metmiot",
      "password": "1c7f51876e9b1aeed258aab81c34beb0998ffa92",
      "name": "Matteo",
      "surname": "Miotello",
      "birthDate": "06/04/1998",
      "phone": 3923400686,
      "preferredWorkshops": [
        "612fff6482c2a77cef320297",
        "612fa6b9e1550910d543a690",
        "6130f7ff356f2348345b1386",
        "6130f7ff356f2348345b1386"
      ],
      "__v": 0,
      "defaultWorkshop": "612fa6b9e1550910d543a690"
    },
    "dateStart": "2021-12-02T23:00:00.000Z",
    "dateEnd": null,
    "frequency": 30,
    "__v": 0
  }
]
```

### GET /personal/:personId

Ritorna tutti i rental di un person

```json
[
  {
    "_id": "6131ed38729fdd35a175ebf6",
    "installment": 10,
    "vehicle": "612f9d67b58e75055ea0cfbd",
    "person": "6130006182c2a77cef32029a",
    "dateStart": "2021-12-02T23:00:00.000Z",
    "dateEnd": null,
    "frequency": 30,
    "__v": 0
  }
]
```

### GET /details/:id

ritorna i dettagli di un rental

```json
[
  {
    "_id": "6131ed38729fdd35a175ebf6",
    "installment": 10,
    "vehicle": "612f9d67b58e75055ea0cfbd",
    "person": "6130006182c2a77cef32029a",
    "dateStart": "2021-12-02T23:00:00.000Z",
    "dateEnd": null,
    "frequency": 30,
    "__v": 0
  }
]
```

### POST /create/

Crea un nuovo rental tramite questo JSON:

```json
{
  "installment": 10,
  "vehicle": "612f9d67b58e75055ea0cfbd",
  "person": "6130006182c2a77cef32029a",
  "dateStart": "12/03/2021"
}
```

## /bookingType

### GET /

Ritorna tutti i booking Type

```json
[
    {
        "_id": "613217e0dc68be74e7fbcf33",
        "name": "Oil Change",
        "__v": 0
    }
]
```
### POST /create

Crea un nuovo booking type partendo da questo JSON:

```json
{
  "name": "Oil change",
}
```
