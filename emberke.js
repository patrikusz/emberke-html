document.addEventListener("DOMContentLoaded", () => {
    // Kezdőpozíció
    let startRow = 1; // Kezdősor (nulla-alapú index)
    let startCol = 14; // Kezdőoszlop
    let currentRow = startRow;
    let currentCol = startCol;

    const table = document.querySelector(".palya");

    // Mozgatási függvény
    function movePlayer(rowChange, colChange) {
        const newRow = currentRow + rowChange;
        const newCol = currentCol + colChange;

        // Ellenőrizzük, hogy az új pozíció a táblázaton belül van-e
        if (newRow < 0 || newRow >= table.rows.length || newCol < 0 || newCol >= table.rows[0].cells.length) {
            alert("Nem léphetsz ki a tábláról!");
            resetToStart();
            return;
        }

        // Új cella kiválasztása
        const newCell = table.rows[newRow].cells[newCol];

        // Ha az új cella nem "ut", visszadob a kezdőhelyre
        if (!newCell.classList.contains("ut")) {
            alert("Csak az úton járhatsz!");
            resetToStart();
            return;
        }

        // Ellenőrzés: elérte az emberke a célcellát?
        if (newCell.classList.contains("finish")) {
            alert("Nyertél!");
            return;
        }

        // Emberke eltávolítása az aktuális cellából
        const currentCell = table.rows[currentRow].cells[currentCol];
        currentCell.classList.remove("utembi");
        currentCell.classList.add("ut");

        // Emberke hozzáadása az új cellához
        newCell.classList.remove("ut");
        newCell.classList.add("utembi");

        // Frissítjük az aktuális pozíciót
        currentRow = newRow;
        currentCol = newCol;
    }

    // Kezdőpozícióra visszaállítás
    function resetToStart() {
        // Töröljük az aktuális cellát
        const currentCell = table.rows[currentRow].cells[currentCol];
        currentCell.classList.remove("utembi");
        currentCell.classList.add("ut");

        // Emberke visszahelyezése a kezdőhelyre
        const startCell = table.rows[startRow].cells[startCol];
        startCell.classList.remove("ut");
        startCell.classList.add("utembi");

        // Pozíciók visszaállítása
        currentRow = startRow;
        currentCol = startCol;
    }

    // Gombok eseménykezelése
    document.getElementById("up").addEventListener("click", () => movePlayer(-1, 0));
    document.getElementById("down").addEventListener("click", () => movePlayer(1, 0));
    document.getElementById("left").addEventListener("click", () => movePlayer(0, -1));
    document.getElementById("right").addEventListener("click", () => movePlayer(0, 1));
});
