const express = require('express');
const app = express();
const PORT = 5000;

const notesRoutes = require('./routes/notes')

app.use(express.json());

app.use('/notes', notesRoutes);

app.use((err, req,res,next) => {
    console.error(err.stack);
    res.status(500).json({success: false, message: "Server Error!"})
})

app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});

