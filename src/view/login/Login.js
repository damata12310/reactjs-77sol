import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, changeValue } from '../../store/actions/auth.action'
import { withStyles } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Loading from '../../components/loading/Loading'
import { rootUrlReact } from '../../config/globalConfig'

export class Login extends Component {
  login = () => {
    const { credentials } = this.props
    this.props.login(credentials).then(() => {
      if (this.props.success) {
        window.location.replace(rootUrlReact + 'busca-cep')
      }
    })
  }

  render() {
    return (
      <div>
        <Loading />
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5">
            <div className="text-center">
              <Typography
                className="mt-3 font-weight-normal"
                component="h1"
                variant="h4"
              >
                Login Teste 77Sol
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                className="justify-content-center mt-5"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  sx={{ width: 100, height: 100, bgcolor: '#001fff' }}
                >
                  77Sol
                </Avatar>
              </Stack>
            </div>

            <div className="mt-4">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Email"
                name="email"
                type="email"
                label="E-mail"
                value={this.props.credentials.email}
                onChange={text =>
                  this.props.changeValue({ email: text.target.value })
                }
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Password"
                name="password"
                type="password"
                label="Senha"
                value={this.props.credentials.password}
                onChange={text =>
                  this.props.changeValue({ password: text.target.value })
                }
              />

              <Button
                type="button"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                className="mb-3 mb-md-4 mt-4"
                onClick={() => this.login()}
              >
                Login
              </Button>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  credentials: state.authReducer.credentials,
  success: state.authReducer.success
})

const mapDispatchToProps = {
  login,
  changeValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
