import React, { FC } from 'react'
import { Route, Routes } from 'react-router'
import Home from 'containers/pages/Home'

import './App.css'

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:orgCode/members" /** Show Component */ />
      <Route path="*" /** Default Rooting */ />
    </Routes>
  </>
)

export default App
