import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from 'containers/pages/Home'

import './App.css'
import Members from 'containers/pages/Members'

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:orgCode/members" element={<Members />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
)

export default App
