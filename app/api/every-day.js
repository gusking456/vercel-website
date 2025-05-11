export default function handler(req, res) {
  console.log("✅ Cron: Running daily task");
  res.status(200).send("Daily task executed successfully");
}
