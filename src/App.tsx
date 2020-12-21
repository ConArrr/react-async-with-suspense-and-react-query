import React, { FC } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" /** Home Component */ />
      <Route path="/:orgCode/members" /** Show Component */ />
      <Route path="*" /** Default Rooting */ />
    </Routes>
  </>
)

export default App
