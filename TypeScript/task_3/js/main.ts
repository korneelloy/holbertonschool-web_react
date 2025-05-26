/// <reference types='./crud.d.ts'/>
import { RowID } from './interface';
import { RowElement } from './interface';
import * as CRUD from './crud.js'

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = CRUD.updateRow(row, 23);
CRUD.deleteRow(row);
