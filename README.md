# Mod-menus

Standalone game pages with local mod menus.

## Mod menus

- **Retro Bowl** (`retro-bowl (1).html`): 98 gameplay, team, and roster options (including 50 individual roster attribute levels and +50 coach credits per click, with a live visible balance), 100x/instant XP, a neon theme, and natural season simulation to championship week. Stat-based mods depend on fields exposed by the game build; forced-win/record controls remain excluded.
- **RocketBaller** (`RocketBaller.html`): a single, self-contained offline HTML powered by [Neon Rocket 3D](https://github.com/airope/neon-rocket). Open **`RocketBaller.html`** in a modern browser to play; it embeds its renderer, RocketSim WebAssembly physics, arena, AI opponent, aerial controls, settings, and game UI. Native Freeplay has no opponent, countdown, or score limit; reset the ball with **R**. The menu and arena use custom original visuals, with the rendered stadium aligned to the native physics field. **W/S pitch forward/back**, **A/D yaw**, **Q/E air roll**, and **B toggles Ball Cam**; settings let you tune aerial sensitivity, camera distance, and the default camera. **J** opens credits. The ZIP is not changed by this workflow. To regenerate only the HTML, run `npm run build:single-html` from [`NeonRocket/`](./NeonRocket/). The original prototype remains as [`RocketBaller-Classic.html`](./RocketBaller-Classic.html). Neon Rocket is MIT-licensed; third-party components retain their own licenses.
- **Bow Masters** (`bow-masters (1).html`): 20 live gameplay mods for health, shot power, aim, turn control, rival behavior, and gravity.
- **Baseball Bros** (`baseball-bros.html`): 10 game cheats, including home runs, faster pitches, auto-catch, stealing, and score injection.
- **2048** (`2048.html`): existing game menu.

Open a menu with its in-page button (upper-right for Retro Bowl, upper-left for Bow Masters) or press **Right Shift**. Some mods only take effect while a supported game state is active; Baseball Bros cheats are intended for local games.
