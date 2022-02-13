import React from 'react';
import styled from 'styled-components';

export default function _HStack(props) {
    const { children, ...rest } = props;

    const StyledDiv = styled.div`
        display: flex;
        flex-direction: row;
    `;
    return <StyledDiv {...rest}>{children}</StyledDiv>;
}
