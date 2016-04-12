import React, { PropTypes } from 'react';

import GridRow from './gridRow';
import GridColumn from './gridColumn';

const GridBodyComponent = props => {
    const { data, columns } = props;
    const tableRows = data.map(function (item, r) {
        const tableColumns = columns.map((column, i) => {
            const fieldValue = item[column];
            return (<GridColumn key={ i }>{ fieldValue }</GridColumn>);
        }, this);
        return (<GridRow key={ r }>{ tableColumns }</GridRow>);
    }, this);
    return (
        <div>
            { tableRows }
        </div>
    );
};

GridBodyComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};

export default GridBodyComponent;
