import React, { ReactNode } from 'react'
import styled from 'styled-components'
import HeaderText from '../Text/HeaderText'

interface IData {
  id: string;
}

interface IColumn { key: string; label: string; };

interface ITable<D = IData> {
  title: string;
  data: D[];
  columns: IColumn[];
}

interface ITableRow {
  children?: ReactNode;
}

interface ITableColumn {
  children?: ReactNode;
}

interface ITableTitle {
  children?: ReactNode;
}

export default function Table<D extends IData>({ title, data, columns }: ITable<D>) {
  return (
    <>
      <Table.Header>{title}</Table.Header>
      <Table.Container>
        <Table.Row>
          {columns.map(({ key, label }) => (
            <Table.Column key={key}>{label}</Table.Column>
          ))}
        </Table.Row>

        {data.map(d => (
          <Table.Row key={d.id}>
            {columns.map(({ key }) => (
              <Table.Column key={key}>{d[key as keyof IData] ?? '-'}</Table.Column>
            ))}
          </Table.Row>
        ))}
      </Table.Container>
    </>
  )
}

Table.Header = function TableTitle({ children }: ITableTitle) {
  return (
    <HeaderText as="h4" padding="20px 0 20px 0" color="gray">{children}</HeaderText>
  )
}

Table.Container = styled.div`
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
`

Table.RowContainer = styled.div`
  width: 100%;
  display: flex;
`

Table.Row = function TableRow({ children }: ITableRow) {
  return (
    <Table.RowContainer>
      {children}
    </Table.RowContainer>
  )
}

Table.ColumnContainer = styled.div`
  width: 100%;
  padding: 10px;

  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`

Table.Column = function TableColumn({ children }: ITableColumn) {
  return (
    <Table.ColumnContainer>
      {children}
    </Table.ColumnContainer>
  )
}
