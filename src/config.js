module.exports = {
  token: process.env.token || "MTM2MjY3MDM1NzQzMzE1NTc4Nw.Ga4cn2.RmFjp7UTSwJiPorqtLmeSNeRUYOq-YSlYI4BdE", // Your bot token
  channelId: process.env.channelId || "1362691509106769950", //Channel Id you want to send the message

  webMonitor: true, // Set to false if you don't want to use web-monitor
  expressPort: process.env.expressPort || 3000, // Port for web monitor

  nodes: [
    {
      host: "lavalink.nextgencoders.xyz",
      password: "nextgencoderspvt",
      port: 443,
      identifier: "Node-1",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "lavalink.nextgencoders.xyz",
      password: "nextgencoderspvt",
      port: 80,
      identifier: "Node-2",
      secure: false,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    }
  ],
};
