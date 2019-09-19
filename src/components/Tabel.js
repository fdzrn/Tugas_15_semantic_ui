import React, {Component} from 'react';
import {Icon, Label, Menu, Table, Search, Container} from 'semantic-ui-react';
class Tabel extends Component{
	render(){
		return(
			<Container>
			<Table celled>
		    <Table.Header>
		      <Table.Row textAlign='right'>
		        <Table.HeaderCell colSpan='2'><Search placeholder='Cari ...' /></Table.HeaderCell>
		      </Table.Row>
		      <Table.Row textAlign='center'>
		        <Table.HeaderCell>Nama Dokumen</Table.HeaderCell>
		        <Table.HeaderCell textAlign='center'>Jenis File</Table.HeaderCell>
		      </Table.Row>
		    </Table.Header>

		    <Table.Body>
		      <Table.Row>
		        <Table.Cell>
		          <Label ribbon>Panduan Belajar Javascript</Label>
		        </Table.Cell>
		        <Table.Cell textAlign='center'>PDF</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Panduan Belajar CSS</Table.Cell>
		        <Table.Cell textAlign='center'>PDF</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Panduan Belajar React JS</Table.Cell>
		        <Table.Cell textAlign='center'>PDF</Table.Cell>
		      </Table.Row>
		    </Table.Body>

		    <Table.Footer>
		      <Table.Row>
		        <Table.HeaderCell colSpan='3'>
		          <Menu floated='right' pagination>
		            <Menu.Item as='a' icon>
		              <Icon name='chevron left' />
		            </Menu.Item>
		            <Menu.Item as='a'>1</Menu.Item>
		            <Menu.Item as='a'>2</Menu.Item>
		            <Menu.Item as='a'>3</Menu.Item>
		            <Menu.Item as='a'>4</Menu.Item>
		            <Menu.Item as='a' icon>
		              <Icon name='chevron right' />
		            </Menu.Item>
		          </Menu>
		        </Table.HeaderCell>
		      </Table.Row>
		    </Table.Footer>
		  </Table>
		  </Container>
		);
	}
}

export default Tabel;