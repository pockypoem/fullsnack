const express = require("express");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello Duniaaa");
});

app.post("/api/v1/login", (req, res) => {
    res.send("Masukkk Cuyy!");
});

app.use((req,res) => {
    res.send("Mau kemana bosss????");
})

app.listen(PORT, () => {
    console.log(`Express jalan nih di http://localhost:${PORT}`);
})