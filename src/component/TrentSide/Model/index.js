import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PostSearch from "../../PostSide/PostSearch"

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:5,
  outline:"none",
  p: 4,
};

function Index({model, setModel}) {
  const handleClose = () => setModel(false);

  return (
    <div>
      <Modal
        open={model}
        onClose={(handleClose)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PostSearch/>
        </Box>
      </Modal>
    </div>
  );
}

export default Index