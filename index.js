const express = require('express');
const cors = require('cors');
const supabase = require('@supabase/supabase-js');
const app = express();
const PORT = 4000;

const SUPABASE_URL = "https://jnrcmmxijleugueubrnu.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucmNtbXhpamxldWd1ZXVicm51Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDY0NTU1NywiZXhwIjoyMDMwMjIxNTU3fQ.0SSmPw3cpCE60SJUNjaJBrkiT1okIxhfu8h5-AtG4_w";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
app.use(express.json());
app.use(cors());
app.get('/', async (req, res) => {
    const getData = await db.from("sapi").select();
    console.log(getData);
    res.json({ getData });
});

app.post('/', async (req, res) => {
    const { nama, uid } = req.body;
    const tambahData = await db.from("sapi").insert({ nama, uid })
    console.log("halo bang masuk ya bang! ", tambahData);
    res.json({ tambahData });
});


app.listen(PORT, () => {
    console.log('Example app listening on port', PORT);
});

