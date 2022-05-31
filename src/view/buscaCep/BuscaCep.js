import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue } from '../../store/actions/auth.action'
import { simulador } from '../../store/actions/buscaCep.action'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Http } from '../../config/globalConfig'

export class BuscaCep extends Component {
  simulador = () => {
    const { credentials } = this.props
    this.props.simulador(credentials).then(() => {
      return Http.post(
        'http://localhost:8000/api/simulador-sol',
        {
          estrutura: localStorage.getItem('estrutura'),
          estado: localStorage.getItem('estado'),
          cidade: localStorage.getItem('cidade'),
          valor_conta: localStorage.getItem('valor_conta'),
          cep: localStorage.getItem('cep'),
          latitude: localStorage.getItem('latitude'),
          longitude: localStorage.getItem('longitude')
        },
        {
          headers: {
            Authorization: 'bearer ' + localStorage.getItem('access_token')
          }
        }
      ).then(res => {
        localStorage.setItem('parcerios_regiao', res.data.integradores_regiao)
        localStorage.setItem('economia', res.data.economia)
        localStorage.setItem('potencial', res.data.potencial)
        console.log(res.data.parcelamento)
        let indice = 0
        res.data.parcelamento.forEach(element => {
          indice = indice + 1
          localStorage.setItem('parcelas' + indice, element.parcelas)
        })
        window.location.reload()
      })
    })
  }

  render() {
    return (
      <div className="teste">
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5">
            <div className="text-left">
              <Typography
                className="mt-3 font-weight-normal"
                component="h1"
                variant="h4"
              >
                Simulador
              </Typography>
            </div>

            <div className="mt-4">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="cep"
                name="cep"
                type="text"
                label="CEP"
                value={this.props.credentials.cep}
                onChange={text =>
                  this.props.changeValue({ cep: text.target.value })
                }
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="valor_conta"
                name="valor_conta"
                type="text"
                label="Valor da conta"
                value={this.props.credentials.valor_conta}
                onChange={text =>
                  this.props.changeValue({ valor_conta: text.target.value })
                }
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="tipo_telhado"
                name="tipo_telhado"
                type="text"
                label="Tipo de telhado"
                value={this.props.credentials.tipo_telhado}
                onChange={text =>
                  this.props.changeValue({ tipo_telhado: text.target.value })
                }
              />

              <Button
                type="button"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                className="mb-3 mb-md-4 mt-4"
                onClick={() => this.simulador()}
              >
                Simular
              </Button>
            </div>
          </div>
        </Container>
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5">
            <p>
              Parceiros da Região: {localStorage.getItem('parcerios_regiao')}
            </p>
            <p>Economia: {localStorage.getItem('economia')}</p>
            <p>Potencial: {localStorage.getItem('potencial')}</p>
            <p>
              Parcelas disponíveis:
              <br />
              {localStorage.getItem('parcelas1')}
              <br />
              {localStorage.getItem('parcelas2')}
              <br />
              {localStorage.getItem('parcelas3')}
              <br />
              {localStorage.getItem('parcelas4')}
              <br />
              {localStorage.getItem('parcelas5')}
              <br />
              {localStorage.getItem('parcelas6')}
              <br />
              {localStorage.getItem('parcelas7')}
              <br />
              {localStorage.getItem('parcelas8')}
              <br />
              {localStorage.getItem('parcelas9')}
              <br />
              {localStorage.getItem('parcelas10')}
            </p>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  credentials: state.buscaCep.credentials,
  success: state.authReducer.success
})

const mapDispatchToProps = {
  simulador,
  changeValue
}

export default connect(mapStateToProps, mapDispatchToProps)(BuscaCep)
