import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import leftImg from "../Assets/left.jpg"
import rightImg from "../Assets/right.jpg";

const Right = () => {
  return (
    <div>
      <div className="left" style={{display : "flex"}}>
        <div className="avatar">
          <Stack direction="row" spacing={2}>
            <Avatar src="/broken-image.jpg" />
          </Stack>
        </div>

        <div className="chactbox" style={{marginLeft : "20px"}}>
          <img src={leftImg} alt="" style={{width : "15px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Right;