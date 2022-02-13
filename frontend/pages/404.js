import { Flex } from 'components/UIComponents';
import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
    const StyledFlex = styled(Flex)`
        height: 100vh;
        width: 100vw;
        background: red;
    `;

    return (
        <Flex>
            <h1>404</h1>
            <h1>404</h1>
        </Flex>
    );
}
