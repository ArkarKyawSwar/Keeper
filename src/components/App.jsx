import React from 'react';
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';



function App() {

    const [notes, setNotes] = React.useState([]);



    function addNote(note){
        const toAdd = {
            ...note,
            key: notes.length
        }

        setNotes(prevNotes => {
            return [...prevNotes, toAdd];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
         return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <Input onAdd={addNote}/>
        {notes.map((note, index) => (
            <Note key={index} 
            id={index}
            title={note.title} 
            content={note.content}
            onDelete={deleteNote}
            />
        ))}
        <Footer />
    </div>
}

export default App;