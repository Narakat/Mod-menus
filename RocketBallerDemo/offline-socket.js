/* SOLO-only static export: multiplayer requires a self-hosted server. */
(() => {
  const socket = Object.freeze({
    connected: false,
    disconnected: true,
    on() { return this; },
    emit() { return this; },
    timeout() { return this; },
    async emitWithAck() { throw new Error('SOLO-ONLY DEMO: no multiplayer server.'); }
  });
  window.io = () => socket;
})();
