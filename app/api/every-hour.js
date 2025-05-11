export default function handler(req, res) {
  console.log("✅ Cron: Running every hour task");
  res.status(200).send("Hourly task executed successfully");
}
