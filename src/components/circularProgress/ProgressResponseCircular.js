import React, { Component } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export class ProgressResponseCircular extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }
}

export default ProgressResponseCircular
