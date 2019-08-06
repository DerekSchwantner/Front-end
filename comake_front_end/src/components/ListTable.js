import React from "react";
import ListTableRow from "./ListTableRow";
import { Table, Header, Image, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import styles from "../styles/listTableStyles.css";

const dropdownOptions = [
  { key: "recent", text: "Most recent", value: "recent" },
  { key: "location", text: "Zip", value: "location" },
  { key: "category", text: "Category", value: "category" }
];

function ListTable(props) {
  return (
    <Table basic="very" celled collapsing className="list-table">
      <Table.Header className="column-header">
        <Table.Row>
          <Table.HeaderCell textAlign="center">Issue</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Category</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Upvotes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body className="table-body">
        {/* { issues.map( issue => <ListCard key={issue.id} data={issue}  /> )}     */}
        {props.issues &&
          props.issues.map(issue => <ListTableRow issue={issue} />)}
      </Table.Body>
    </Table>
  );
}

export default ListTable;
