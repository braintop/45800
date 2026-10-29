const fs = require("fs");//file system module מספק פונקציות לעבוד עם קבצים ותיקיות
const path = require("path");
let appName = process.env.AppName || "Unknown";
console.log(`App Name: ${appName}`);
// הקובץ נשמר בתיקייה data, כדי שיהיה קל לחבר אותה ל-Volume ב-Docker
const dataDir = path.join(__dirname, "data");
console.log(dataDir);///Users/braintopltd/Desktop/joni1/45800/45800/0/03-docker-fs/data
const filePath = path.join(dataDir, "counter.txt");
console.log(filePath);///Users/braintopltd/Desktop/joni1/45800/45800/0/03-docker-fs/data/counter.txt
// יוצרים את התיקייה אם היא עוד לא קיימת
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// קוראים את המספר הנוכחי. אם הקובץ לא קיים, מתחילים מ-0
let count = 0;
if (fs.existsSync(filePath)) {
  count = Number(fs.readFileSync(filePath, "utf8")) || 0;
}

count++;

// שומרים את המספר החדש
fs.writeFileSync(filePath, String(count));

console.log(`התוכנית רצה ${count} פעמים`);