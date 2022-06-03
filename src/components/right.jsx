import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import leftImg from "../Assets/left.jpg"
import rightImg from "../Assets/right.jpg";
import { Box } from '@mui/material';

const Right = () => {
  return (
    <div style={{width : "100%", display : "flex", marginRight : "1%", marginLeft : "1%"}}>
      <div className="LEFT" style={{display : "flex", flexDirection : "column", flex : "1", justifyContent : "flex-end"}}>
         <div className="left1" style={{display : "flex", marginBottom : "80px"}}>
            <div className="avatar">
              <Stack direction="row" spacing={2}>
                <Avatar src="/broken-image.jpg" />
              </Stack>
            </div>

            <div className="chactbox" style={{marginLeft : "20px", display : "flex"}}>
              <img src={leftImg} alt="" style={{width : "15px"}}/>
              <Box
          sx={{
            width: 200,
            height: 40,
            backgroundColor: 'rgba(152, 150, 150, 0.46)',
            borderRadius : '5px',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
            </div>
          </div>

          <div className="left2" style={{display : "flex"}}>
            <div className="avatar">
              <Stack direction="row" spacing={2}>
                <Avatar src="/broken-image.jpg" />
              </Stack>
            </div>

            <div className="chactbox" style={{marginLeft : "20px", display : "flex"}}>
              <img src={leftImg} alt="" style={{width : "15px"}}/>
              <Box
          sx={{
            width: 200,
            height: 40,
            backgroundColor: 'rgba(152, 150, 150, 0.46)',
            borderRadius : '5px',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
            </div>
          </div>
      </div>
     

      <div className="Right" style={{display : "flex", flex : "2", justifyContent : "flex-end", alignItems : "flex-end", marginBottom : "70px", flexDirection : "column"}}>
      <div className="right1" style={{marginLeft : "20px", display : "flex"}}>
          <Box
      sx={{
        width: 200,
        height: 40,
        backgroundColor: 'rgba(46, 40, 44, 0.77)',
        borderRadius : '5px',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
     <img src={rightImg} alt="" style={{width : "15px"}}/>
        </div>

        <div className="right2" style={{marginLeft : "20px", display : "flex", marginTop : "70px"}}>
          <Box
      sx={{
        width: 200,
        height: 40,
        backgroundColor: 'rgba(46, 40, 44, 0.77)',
        borderRadius : '5px',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
     <img src={rightImg} alt="" style={{width : "15px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Right;