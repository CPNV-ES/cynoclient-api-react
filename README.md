# cynoclient-api-react

REST API for cyno

## Démarrer le serveur

    npm run start
    
## Récupérer les relations

Mettre à la fin de l'url : `?with[]=nom_d'une_relation`.
Si plusieurs relation chaîner avec un & : `?with[]=nom_d'une_relation&with[]=nom_d'une_relation`
Par exemple: 

`/dogs?with[]=breed` : Récupére les chiens avec la race
`/dogs/1?with[]=breed&with[]=crossbreed` : Récupére le chien avec l'id 1 et la race et le croisement