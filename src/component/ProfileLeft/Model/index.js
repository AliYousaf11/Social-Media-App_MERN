import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:5,
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your info
          </Typography>


          <div className="SignUp">
      <form className="AuthForm">
      <div>
        <input type="text" placeholder="First name" name="firstname" className="InfoInput"/>
        <input type="text" placeholder="Last name" name="lastname" className="InfoInput"/>
      </div>

      <div>
        <input type="text" placeholder="work at" name="work" className="InfoInput"/>
      </div>
      
      <div>
        <input type="text" placeholder="lives in" name="lives" className="InfoInput"/>
        <input type="text" placeholder="country" name="country" className="InfoInput"/>
      </div>

      <div>
        <input type="text" placeholder="relationship status" name="relationship" className="InfoInput"/>
      </div>

      <div>
        Profile Image
        <input type='file' name="profileImage"/>
        Cover Image
        <input type='file' name="coverImage"/>
      </div>
      <button className="button infoButton" type="submit">Update</button>
      </form>
    </div>

        </Box>
      </Modal>
    </div>
  );
}

export default Index