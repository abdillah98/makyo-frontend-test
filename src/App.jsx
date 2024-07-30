import Dropdown from './stories/Dropdown'
import './App.css'

function App() {
  
  return (
    <div className="max-w-2xl mx-auto py-[40px] px-[20px]">
      <Dropdown 
        multiple={true}
        renderOption={true}
        withSearch={true}
        options={[
          {id: 1, label: 'Pohon Pisang'},
          {id: 2, label: 'Motor Honda'},
          {id: 3, label: 'Kucing Persia'},
          {id: 4, label: 'Apel Malang'},
        ]}
        portal={false}
        outlined={false}
        optionLabel="Dropdown Filter"
        id="dropdown"
      />
    </div>
  )
}

export default App
