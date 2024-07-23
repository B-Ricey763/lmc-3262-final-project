import { Description, Lock, LockOpen } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Snackbar,
  TextField,
} from "@mui/material";
import notes from "./Notes";
import React, { useEffect, useState } from "react";

function PasswordDialog(props) {
  const { onClose, open, setOpen, currentNote, unlockNote } = props;
  const [password, setPassword] = useState("");
  const [wrongPass, setWrongPass] = useState(false);

  useEffect(() => {
    if (open) {
      setPassword("");
    }
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  const checkPassword = () => {
    if (currentNote.password === password) {
      unlockNote(currentNote.id);
      setOpen(false);
    } else {
      setWrongPass(true);
    }
  };

  const handleSnackClose = () => {
    setWrongPass(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>This note is password locked!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => checkPassword()}>
            UNLOCK
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={wrongPass}
        sx={{}}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Wrong Password, try again!
        </Alert>
      </Snackbar>
    </>
  );
}

function NoteDialog({ note, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{note.name}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ whiteSpace: "pre-wrap" }}>
          {note.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function Notes({ unlockedNoteIds, setUnlockedNoteIds }) {
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  const tryOpenNote = (note) => {
    setCurrentNote(note);
    if (unlockedNoteIds.includes(note.id) || note.password === "") {
      setNoteOpen(true);
    } else {
      setPasswordOpen(true);
    }
  };

  const handleClose = () => {
    setPasswordOpen(false);
  };

  const unlockNote = (id) => {
    setUnlockedNoteIds([...unlockedNoteIds, id]);
    setNoteOpen(true);
  };

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {notes.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <ListItemButton
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
                onClick={() => tryOpenNote(item)}
              >
                <ListItemText primary="OPEN" />
              </ListItemButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                {unlockedNoteIds.includes(item.id) || item.password === "" ? (
                  <LockOpen />
                ) : (
                  <Lock />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <PasswordDialog
        open={passwordOpen}
        setOpen={setPasswordOpen}
        onClose={handleClose}
        currentNote={currentNote}
        unlockNote={unlockNote}
      />
      <NoteDialog
        open={noteOpen}
        onClose={() => setNoteOpen(false)}
        note={currentNote}
      />
    </div>
  );
}

export default Notes;
