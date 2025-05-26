import RowID from './interface.js';
import RowElement from './interface.js';

export function insertRow(RowElement): number;
export function deleteRow(RowID): void;
export function updateRow(RowID, RowElement): RowID;
