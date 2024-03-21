import axios from 'axios'
import { useState, useEffect } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { API_URL } from './Constants/Url'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

const Read = () => {

  const [apiData, setApiData] = useState([])
  const navigate = useNavigate()

  const updateUser = ({ firstName, lastName, checked, id }) => {

    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('checked', checked)
    navigate('/update')
  }

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    callGetApi()
    toast.success("Deleted Successfully!");
  }

  const callGetApi = async () => {
    const res = await axios.get(API_URL);
    setApiData(res.data)
  }

  useEffect(() => {
    callGetApi();
  }, []);

  return (
    <Table singleLine>

      <Table.Header>
        <Table.Row
        >
          <Table.HeaderCell>FirstName</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
      <Table.Body>

        {
          apiData.map(data => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checked ? "checked" : "Not Checked"}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => deleteUser(data.id)}>Delete</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => updateUser(data)}>Update</Button>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}

export default Read