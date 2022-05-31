import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLoading } from '../../store/actions/loading.action'
import Modal from '@mui/material/Modal'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
// import withStyles from '@material-ui/core/styles/'

// const styles = {
//   progress: {
//     marginRight: '15px'
//   },
//   modal: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%'
//   },
//   paper: {
//     backgroundColor: '#ffffff',
//     padding: '15px',
//     borderRadius: '10px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     outline: 'none'
//   }
// }

export class Loading extends Component {
  // handeclose = () => {}
  render() {
    // const { classes } = this.props
    return <div></div>
  }
}

const mapStateToProps = state => ({
  loading: state.loadingReducer
})

const mapDispatchToProps = dispatch => ({
  changeLoading: value => dispatch(changeLoading(value))
})

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(Loading))

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
