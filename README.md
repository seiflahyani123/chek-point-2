exerice:
Ce que vous visez

Point de contrôle : changeur de couleurs interactif

Voici une description générale de ce que vous allez créer :

Le fichier HTML crée une page Web simple avec un titre, une case colorée et un bouton.
Le fichier CSS contient le style de base des éléments.
Le fichier JavaScript définit la fonctionnalité permettant de modifier la couleur de la boîte lorsque le bouton est cliqué.
La fonction getRandomColor() génère un code couleur hexadécimal aléatoire.
Lorsque le bouton est cliqué, la fonction getRandomColor() est appelée et la couleur d'arrière-plan de la boîte ( colorBox ) est modifiée en fonction de la couleur générée.
Veuillez maintenant suivre les instructions ci-dessous :


Instructions

Configuration HTML :
Créez un nouveau fichier HTML.
Configurez la structure de base d'un document HTML avec la déclaration <!DOCTYPE html> , les balises <html> , <head> et <body> .
Ajoutez un titre au document, tel que « Changeur de couleurs ».
Créer l'interface :
À l'intérieur de la balise body, créez un élément <div> avec un nom de classe « container » .
À l'intérieur du conteneur, ajoutez un élément <h1> avec le texte « Changeur de couleur ».
Créez un autre élément <div> avec l'identifiant « color-box » . Il représentera la boîte dont la couleur changera.
Ajoutez un élément <button> avec l'ID « change-color-btn » . Le bouton doit contenir le texte « Changer de couleur ».
Style avec CSS :
Créez un fichier CSS et liez-le à votre document HTML à l'aide de la balise <link> .
Stylisez la classe conteneur pour centrer son contenu horizontalement et donnez-lui une marge supérieure pour l'espacement.
Donnez un style à l'ID de la boîte de couleur avec une largeur et une hauteur fixes et définissez une couleur d'arrière-plan par défaut.
Donnez du style à l'ID change-color-btn pour le rendre visuellement attrayant et facilement cliquable.
JavaScript pour l'interactivité :
Créez un fichier JavaScript et liez-le à votre document HTML à l'aide de la balise <script> .
Écrivez du code JavaScript pour attendre que le contenu DOM soit chargé à l'aide de l'événement DOMContentLoaded .
À l'intérieur du gestionnaire d'événements, sélectionnez les éléments color-box et change-color-btn à l'aide de document.getElementById() .
Implémentez une fonction, appelons- la getRandomColor() , qui génère une couleur aléatoire. Vous pouvez utiliser des valeurs hexadécimales ou RVB.
Ajoutez un écouteur d'événements à l'élément change-color-btn. Lorsqu'il est cliqué, l'écouteur d'événements déclenche une fonction qui modifie la couleur d'arrière-plan de la case de couleur en une couleur aléatoire générée par la fonction getRandomColor() .
Essai:
Ouvrez votre fichier HTML dans un navigateur Web.
Cliquez sur le bouton « Changer de couleur » et observez la couleur de la boîte changer de manière dynamique.
