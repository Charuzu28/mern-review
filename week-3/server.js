// const express = require('express');
// const app = express();
// const PORT = 5000;

// const notesRoutes = require('./routes/notes')

// app.use(express.json());

// app.use('/notes', notesRoutes);

// app.use((err, req,res,next) => {
//     console.error(err.stack);
//     res.status(500).json({success: false, message: "Server Error!"})
// })

// app.listen(PORT,() => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const notesRoutes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use('/notes', notesRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({success: false, message: "Server Error!"});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

})

