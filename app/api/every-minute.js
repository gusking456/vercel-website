export default function handler(req, res) {
  console.log("✅ Cron: Running every minute task");
  res.status(200).send("Minute task executed successfully");
}
