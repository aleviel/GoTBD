import React from 'react';

import { Term } from '../charDetails/styles';

const Field = ({ char, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{char[field]}</span>
        </li>
    );
};

export default Field;
