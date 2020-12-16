# cynoclient-api-react

REST API for cyno

## Démarrer le serveur

    npm run start
    
## Récupérer les relations

Mettre à la fin de l'url `?with[]=nom_des_relations_espacées_par_des_virgules`.
Par exemple: 

`/dogs?with[]=client` : Récupére le client associé au dog