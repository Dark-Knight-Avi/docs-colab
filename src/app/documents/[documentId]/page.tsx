import React, {lazy} from 'react'
const Editor = lazy(() => import('./editor'))

const DocumentEditor = () => {
  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
      <Editor />
    </div>
  )
}

export default DocumentEditor
