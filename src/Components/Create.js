import { useState } from "react"
import { API_URL } from "./Constants/Url"
import { Form, Button, Checkbox } from 'semantic-ui-react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Create = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checked, setChecked] = useState(true)

    const navigate = useNavigate();

    const postData = async () => {

        try {
            const { status } = await axios.post(API_URL, {
                firstName, lastName, checked
            })

            if (status) {
                navigate('/read')
                toast.success("Created Sucessfully!")
            } else {
                toast.error("Something went to wrong, please check with your admin!")
            }
        }
        catch (e) {
            toast.error("Something went to wrong, please check with your admin!")
        }

    }

    return (
        <div>
            <Form className='form'>
                <Form.Field>
                    <label>First Name</label>
                    <input value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='FirstName' />

                </Form.Field> <br />
                <Form.Field>
                    <label>Last Name</label>
                    <input value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='LastName' />
                </Form.Field> <br />
                <Form.Field>
                    <Checkbox checked={checked}
                        onChange={() => setChecked(!checked)}
                        label="Agree the terms and conditions" />
                </Form.Field><br />
                <Button onClick={postData}>Submit</Button>
            </Form>
        </div>
    )
}
