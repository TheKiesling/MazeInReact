/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Button,
} from '@components'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
} from 'mdb-react-ui-kit'
import {
  navigate,
} from '@store'

import styles from './Config.module.css'

const Config = ({ configForm, handleChange }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleFillClick = (value) => {
    if (value !== configForm.theme) {
      handleChange({ target: { name: 'theme', value } })
    } else { handleChange({ target: { name: 'theme', value: null } }) }
  }

  useEffect(() => {
    handleChange({ target: { name: 'timeLimit', value: -1 } })
  }, [configForm.time])

  useEffect(() => {
    if (configForm.width <= 7 && configForm.width >= 4
      && configForm.height <= 7 && configForm.height >= 4
      && configForm.player !== null
      && configForm.theme !== null
      && (!configForm.time || configForm.limitTime > 0)) {
      setButtonDisabled(true)
    } else { setButtonDisabled(false) }
  }, [configForm.width, configForm.height, configForm.player, configForm.theme, configForm.time, configForm.limitTime])

  return (
    <div className={`${styles.config}`}>
      <div className={`${styles.size}`}>
        <Input
          label="Ancho"
          name="width"
          type="number"
          value={configForm.width}
          onChange={handleChange}
        />
        <Input
          label="Alto"
          name="height"
          type="number"
          value={configForm.height}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Personaje"
        name="player"
        type="dropdown"
        value={configForm.player}
        onChange={handleChange}
      />
      <div>
        <span>
          Tema
        </span>
        <MDBTabs pills fill className={`${styles.pills}`} id="pills">
          <MDBTabsItem
            onClick={() => handleFillClick('rock')}
            style={{ backgroundColor: configForm.theme === 'rock' ? '#DDD' : '#F0F2EB' }}
          >
            <MDBTabsLink>
              <img src="../../../rockCorner.png" alt="" />
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem
            onClick={() => handleFillClick('seedling')}
            style={{ backgroundColor: configForm.theme === 'seedling' ? '#DDD' : '#F0F2EB' }}
          >
            <MDBTabsLink>
              <img src="../../../seedlingCorner.png" alt="" />
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem
            onClick={() => handleFillClick('egg')}
            style={{ backgroundColor: configForm.theme === 'egg' ? '#DDD' : '#F0F2EB' }}
          >
            <MDBTabsLink>
              <img src="../../../eggCorner.png" alt="" />
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </div>
      <div className={`${styles.time}`}>
        <Input
          label="Limite de tiempo"
          name="time"
          type="checkbox"
          checked={configForm.time}
          onChange={handleChange}
        />

        <Input
          label="Tiempo"
          name="limitTime"
          type="number"
          disabled={!configForm.time}
          value={configForm.limitTime}
          onChange={handleChange}
        />

      </div>
      <div className={`${styles.buttons}`}>
        <Button
          text="Jugar"
          onClick={() => navigate('/maze')}
          type="primary"
          disabled={!buttonDisabled}
        />
        <Button
          text="Salir"
          onClick={() => navigate('/')}
          type="secondary"
        />
      </div>
    </div>
  )
}

Config.propTypes = {
  configForm: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Config
