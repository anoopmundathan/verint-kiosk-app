
import Select from 'react-select';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

  
const App = () => {
    return (
        <div>
            <label>Please select prefered language, if English leave blank.</label>
            <Select options={options} />
        </div>
    )
}

export default App;

