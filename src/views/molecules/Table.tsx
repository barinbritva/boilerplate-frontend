import React, {ReactNode, TableHTMLAttributes} from 'react';

export type TableRow = ReactNode[];

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	rows: TableRow[];
	head?: TableRow;
	footer?: TableRow;
}

export const Table: React.FC<TableProps> = ({className, head, rows, footer}) => {
	return (
		<div className="overflow-x-auto">
			<table className={`table text-base ${className}`}>
				{head && head.length ? (
					<thead className="text-base">
						<tr>
							{head.map((cell, index) => (
								<th key={index}>{cell}</th>
							))}
						</tr>
					</thead>
				) : null}
				<tbody>
					{rows.map((row, index) => (
						<tr key={index} className="hover">
							{row.map((cell, index) => (
								<td key={index}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
				<tfoot className="text-base">
					{footer && footer.length ? (
						<tr>
							{footer.map((cell, index) => (
								<td key={index}>{cell}</td>
							))}
						</tr>
					) : null}
				</tfoot>
			</table>
		</div>
	);
};
