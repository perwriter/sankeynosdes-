import React from 'react'
import SankeyDiagram from './components/SankeyDiagram'
import { sankeyData } from './data/sankeyData'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Job Application Flow</h1>
        <SankeyDiagram data={sankeyData} />
      </div>
    </div>
  )
}

export default App