# Le Coffre Magique

Une application de gestion du coffre à gnôle d'Anthony.

## Project setup
```
npm install
```

### Development
Run server for the app
```
npm run serve
```

Run server for the API
```
php -S localhost:8000 -t api
```

### Compiles and minifies for production
```
npm run build
```

## Générer un token pour accès admin

```
php -r "echo bin2hex(random_bytes(18));" > api/token.txt
```

## Générer les codes QR

https://www.qrcode-monkey.com/fr/

* Vers la carte
  * https://le-coffre-magique.ch
  * logo: [public/img/icons/icon.png](public/img/icons/icon.png)
* Accès admin
  * https://le-coffre-magique.ch/api/setAdmin.php?token= suivi du token
  * logo: [public/img/icons/key.png](public/img/icons/key.png)
* Dégradé: #A866CB #CA8B0E