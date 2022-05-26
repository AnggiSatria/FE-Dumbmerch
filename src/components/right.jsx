import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Right = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar src="/broken-image.jpg" />
      </Stack>
    </div>
  )
}

export default Right;