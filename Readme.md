# READE ME

### COMMANDS
<p>
<p>
<p>
<p>

Dans cd /js-jest/

```
npm install
```

Pour lancer les tests  
```
npm run test
```

Il lance le script test dans /test/gilded_rose.test.js
et sauvegarde les logs dans /logs/log_updateItems/updateItems_${DateNow()}.log

### LIST DES TESTS
<p>

**TEST 00 :** <p>
    - Items vide <P>
**TEST 01 :** <p>
    - Items avec un seul élément <P>
**TEST 02 :** <p>
    - Items classique <P>
**TEST 03 :** <p>
    - Items avec sellin et quality à 0 <P>
**TEST 04 :** <p>
    - (Supprimé) <P>
**TEST 05 :** <p>
    - Items avec sellin en négatif <P>
**TEST 06 :** <p>
    - Items avec  quality en négatif <P>
**TEST 07 :** <p>
    - Items avec des noms random <P>
**TEST 08 :** <p>
    - Items avec sellin et quality en type float <P>
**TEST 09 :** <p>
    - Items  avec sellin et quality en type string <P>
**DAY TEST 01 :** <p>
    - On fait passer 10 jours <P>
**DAY TEST 02 :** <p>
    - On fait passer 10 000 jours <P>
**TEST BIG :** <p>
    - Avec beaucoup item dans Items (lenght pas définit)<P>

## AUTRES TESTS POSSIBLE

- tests avec des nombres très grand en négatif ou positif
- tests sans paramètres dans les constructeurs d'item
- tests avec des charactères spéciaux 
- test avec des item dans items faux (Avec un autre objet ou une list random)

**NOTE** 

Le fichier bigDays.log est vide car nous avons commenté le test qui fait passer 10 000 jours car par manque de temps nous n'avons pas pu bien séparer les logs. Si vous décommentez le test, ces log vont aussi être écrit dans un fichier log classique "updateItems_${DateNow()}.log".