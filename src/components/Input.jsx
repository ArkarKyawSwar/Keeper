import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Input(props) {
    const [note, setNote] = React.useState({title: "", content: ""});
    const [isClicked, setClicked] = React.useState(false);

    function updateInput(event){
        const field = event.target.name;
        const input = event.target.value;

        setNote(prevNote => {
            if(field === "title"){
                return {
                    ...prevNote,
                    title: input
                }
            }else{
                return {
                    ...prevNote,
                    content: input
                }
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function handleClick(){
        setClicked(true);
    }

  return (
    <div> 
      <form className="create-note">
      {isClicked && 
        <input name="title" placeholder="Title" value={note.title} onChange={updateInput}/>
      }
        <textarea onClick={handleClick} name="content" placeholder="Take a note..." rows={isClicked ? 3 : 1} value={note.content} onChange={updateInput} />
        <Zoom in={isClicked}>
            <Fab onClick={submitNote} aria-label="add">
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Input;