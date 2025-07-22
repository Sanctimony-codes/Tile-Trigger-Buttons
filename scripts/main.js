Hooks.once("ready", () => {
  console.log("Tile Trigger Buttons module is ready.");

  canvas.app.stage.on("pointerdown", event => {
    const targetTile = canvas.tiles.placeables.find(tile => tile.hitTest(event.data.global));
    if (!targetTile) return;

    const flags = targetTile.document.flags?.["tile-trigger-buttons"];
    if (!flags?.journalId) return;

    const journalId = flags.journalId;
    let journal = game.journal.get(journalId) || game.journal.getDocument?.(journalId);
    if (journal) {
      journal.sheet.render(true);
    } else {
      ui.notifications.warn(`Journal Entry with ID "${journalId}" not found.`);
    }
  });
});
