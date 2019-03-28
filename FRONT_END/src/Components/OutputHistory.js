import React, { Component } from 'react';

class OutputHistory extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                        <thead>
                            <tr role="row">
                                <th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '10%' }}>Lesson</th>
                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '60%' }}>Name of lesson
                                                        </th>
                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: '15%' }}>Date finish</th>
                                <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: '15%' }}>Point</th>
                            </tr>
                        </thead>
                        {/* <tfoot>
                            <tr>
                                <th rowSpan={1} colSpan={1}>Lesson</th>
                                <th rowSpan={1} colSpan={1}>Name of lesson</th>
                                <th rowSpan={1} colSpan={1}>Date finish</th>
                                <th rowSpan={1} colSpan={1}>Point</th>
                            </tr>
                        </tfoot> */}
                        <tbody>
                            <tr role="row" className="odd">
                                <td className="sorting_1">1</td>
                                <td>イタリア</td>
                                <td>18/3/2019</td>
                                <td>9/10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default OutputHistory;