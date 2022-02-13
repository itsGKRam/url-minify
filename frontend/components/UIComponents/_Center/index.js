import React from 'react';
import styled from 'styled-components';

export default function _Center(props) {
    const { children, ...rest } = props;

    const StyledDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    return <StyledDiv {...rest}>{children}</StyledDiv>;
}
