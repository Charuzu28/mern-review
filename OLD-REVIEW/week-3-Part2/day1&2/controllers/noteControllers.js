const getNotes = (req, res) => {
    res.json([
        {id: 1, title: "book1", author: "CMS"},
         {id: 2, title: "book2", author: "CMS"}
    ])
}

const getNotesId = (req,res) =>{
    const note = {id: req.params.id, title: 'Note example', author: "Author Example"};
    res.json(note)
}

module.exports = {getNotes, getNotesId};