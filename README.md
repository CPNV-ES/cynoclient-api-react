# cynoclient-api-react

REST API for cyno

## Démarrer le serveur

    npm run start
    
## Récupérer les relations

Mettre à la fin de l'url `?with[]=nom_des_relations`.
Par exemple: 

`/dogs?with[]=client` : Récupére le client associé au dog
`/dogs?with[]=client&with[]=service` : Récupére le client associé au dog et au service