# Emberke Játék

Ez egy egyszerű, interaktív játék, amelyben egy karakter (emberke) mozog a táblázaton, hogy elérje a célpontot (finish) anélkül, hogy kilépne az útról. A játék célja, hogy segítse a felhasználót a koordinált mozgás és a térbeli tájékozódás fejlesztésében, miközben szórakoztató módon játszhat.

## Funkciók

- A játékot a táblázat celláiban való mozgással játszhatod, amelyet a vezérlőgombok segítségével irányíthatsz.
- A kezdőpont a táblázat egyik cellájában található, és a célpontot (finish) kell elérni.
- Ha a játékos nem az úton mozog, visszakerül a kezdőhelyre.
- Ha sikerül elérni a célpontot, a játékos nyert.
- A játék folyamatosan figyeli, hogy a játékos ne lépjen ki a táblázat határain.

## Telepítés

1. Másold le a projektet a saját számítógépedre.
2. Az alábbi fájlokat szükséges letölteni:
    - `index.html`: A HTML fájl, amely a játék felületét tartalmazza.
    - `feladat.css`: A CSS fájl, amely a játék vizuális megjelenését szabályozza.
    - `emberke.js`: A JavaScript fájl, amely a játék logikáját és működését biztosítja.
3. Nyisd meg az `index.html` fájlt egy böngészőben, és kezd el játszani!

## Játék működése

- A játékos a nyíl gombok segítségével mozgathatja az emberkét:
    - **⬆**: Fel
    - **⬇**: Le
    - **⬅**: Balra
    - **➡**: Jobbra
- A táblázat cellái különböző típusúak:
    - **Út (ut)**: Az emberke ezen a cellán mozoghat.
    - **Folyó (folyo)**: A folyamot a játék nem érintheti, de szabadon átmehet rajta.
    - **Fa (fa)**: Ezek a cellák akadályokat tartalmaznak, amelyeket kerülni kell.
    - **Emberke (utembi)**: Az emberke jelenlegi pozícióját jelzi a táblázaton.
    - **Cél (finish)**: A célpont, amelyhez el kell jutni a győzelemhez.

## Hogyan működik?

A játék kezdetekor az emberke a kezdőpozícióban található, amelyet a játékos a nyilakkal mozgathat. Ha az emberke elér egy olyan cellát, amely nem az úton van, akkor visszakerül a kezdőhelyre. A játékos célja, hogy az emberkét a célpontba juttassa, miközben elkerüli az akadályokat és nem lép ki a táblázat határain.

## Hibaelhárítás

- Ha a játékos elér egy olyan cellát, ami nem "ut", a rendszer figyelmeztet és visszairányítja a kezdőhelyre.
- A játéknak működnie kell minden modern böngészőben, mint például a Chrome, Firefox, Safari.
