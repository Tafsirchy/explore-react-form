/**
 * 1. e.target.[name of the input field].value
 * 2. use form action and formData in the action handler. formData.get('name of the input field')
 * 3. Controlled component. one per each field. use state on change of the field. useful to dynamically handle error
 * 
 * 3.1. handle all controlled field on one state object [formData, setFormData] = useState({
 *      name: '', 
 *      email: '',
 *      password: '',
 *    })
 * 
 * 4. uncontrolled using useRef component. one per each field. use ref on change of the field. useful to dynamically handle error
 * 
 * 5. Hook Form
 */