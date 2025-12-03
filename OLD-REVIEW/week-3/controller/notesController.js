const fs = require('fs');

const getNotes = (req, res, next) => {
    try {
        const data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
        res.json({success: true, note: data});
    } catch (error) {
        next(error);
    }
}

const addNote = (req, res, next) => {
    try {
         if(!req.body.title){
        return res.status(400).json({success: false, message: "Title Required!"});
         }
    
            const newNote = req.body;
            const data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));

            data.push(newNote);

            fs.writeFileSync('notes.json', JSON.stringify(data,null, 2));
            res.status(201).json({success: true, message: "Note Added!"});
    } catch (error) {
        next(error);
    }
   
}

const updateNote = (req, res, next) => {
    const { id } = req.params;
    const updatedNote = req.body;
    try {
        let data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
         const index = data.findIndex(note => note.id == id);

            if(index == -1){
                return res.status(404).json({success: false, message: "Note Not Found!"})
            }

            data[index] = {...data[index], ...updatedNote}

            fs.writeFileSync('notes.json', JSON.stringify(data,null,2))
            res.status(201).json({success: true, message: "Note Updated!"})
    } catch (error) {
        next(error)
    }
    
}

const deleteNote = (req, res, next) =>{
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));

   try {
     const filteredData = data.filter(note => note.id != id);
    if(filteredData.length == data.length){
        return res.status(404).json({success: false, message: "Not Found!"})
    }

    fs.writeFileSync('notes.json', JSON.stringify(filteredData,null,2));
    res.status(201).json({success: true, message: "Note Deleted!"})
   } catch (error) {
    next(error)
   }
}

module.exports = {getNotes, addNote, updateNote, deleteNote};