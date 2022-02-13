import React from 'react';
import styled from 'styled-components';

export default function _Flex(props) {
    const { children, ...rest } = props;

    const StyledDiv = styled.div`
        display: flex;
    `;
    return <StyledDiv {...rest}>{children}</StyledDiv>;
}
