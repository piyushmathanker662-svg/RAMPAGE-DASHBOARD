/* =========================
   GAME SELECTION
========================= */

.game-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 1000px;
}

.game-card {
    position: relative;
    min-height: 330px;
    border-radius: 22px;
    overflow: hidden;
    cursor: pointer;

    border: 1px solid rgba(140, 255, 0, 0.3);

    background:
        radial-gradient(
            circle at 80% 20%,
            rgba(140, 255, 0, 0.18),
            transparent 35%
        ),
        linear-gradient(
            145deg,
            #11160d,
            #030303
        );

    transition: 0.4s ease;

    box-shadow:
        0 0 30px rgba(140, 255, 0, 0.06),
        inset 0 0 50px rgba(140, 255, 0, 0.02);
}

.game-card::before {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;

    right: -70px;
    top: -70px;

    border: 1px solid rgba(140, 255, 0, 0.15);
    border-radius: 50%;

    box-shadow:
        0 0 0 25px rgba(140, 255, 0, 0.02),
        0 0 0 50px rgba(140, 255, 0, 0.015);
}

.game-card:hover {
    transform: translateY(-8px);

    border-color: var(--green);

    box-shadow:
        0 15px 45px rgba(140, 255, 0, 0.12),
        0 0 25px rgba(140, 255, 0, 0.08);
}

.game-content {
    position: relative;
    z-index: 2;

    height: 100%;

    min-height: 330px;

    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.game-number {
    position: absolute;

    top: 30px;
    left: 35px;

    font-size: 11px;

    letter-spacing: 3px;

    color: var(--green);
}

.game-content h2 {
    font-size: 32px;

    letter-spacing: 4px;

    margin-bottom: 8px;
}

.game-content p {
    color: #777;

    font-size: 11px;

    letter-spacing: 3px;

    margin-bottom: 25px;
}

.game-content button {
    width: fit-content;

    padding: 11px 25px;

    background: var(--green);

    color: #000;

    border: none;

    border-radius: 6px;

    font-weight: bold;

    letter-spacing: 2px;

    cursor: pointer;

    transition: 0.3s;
}

.game-content button:hover {
    box-shadow:
        0 0 25px rgba(140, 255, 0, 0.45);

    transform: translateX(5px);
}


/* =========================
   BGMI COMING SOON
========================= */

.bgmi-card {
    cursor: default;

    filter: grayscale(0.35);
}

.bgmi-card:hover {
    transform: translateY(-5px);
}

.coming-badge {
    width: fit-content;

    padding: 10px 18px;

    border: 1px solid #555;

    border-radius: 6px;

    color: #999;

    font-size: 10px;

    letter-spacing: 3px;

    background: rgba(255,255,255,0.02);
}


/* =========================
   BACK BUTTON
========================= */

.section-top {
    margin-bottom: 35px;
}

.back-btn {
    padding: 10px 20px;

    background: transparent;

    border: 1px solid #333;

    border-radius: 6px;

    color: #888;

    font-size: 11px;

    letter-spacing: 2px;

    cursor: pointer;

    transition: 0.3s;
}

.back-btn:hover {
    color: var(--green);

    border-color: var(--green);

    box-shadow:
        0 0 15px rgba(140, 255, 0, 0.15);
}


/* =========================
   MOBILE GAME CARDS
========================= */

@media (max-width: 800px) {

    .game-grid {
        grid-template-columns: 1fr;
    }

    .game-card {
        min-height: 280px;
    }

    .game-content {
        min-height: 280px;
    }

    .game-content h2 {
        font-size: 26px;
    }
}
