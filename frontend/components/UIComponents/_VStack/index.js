import React from 'react';
import styled from 'styled-components';

export default function _VStack(props) {
    const { children, ...rest } = props;

    const StyledDiv = styled.div`
        display: flex;
        flex-direction: column;
    `;
    return <StyledDiv {...rest}>{children}</StyledDiv>;
}
