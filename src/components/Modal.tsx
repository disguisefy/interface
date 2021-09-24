import { Block, Button, CopyLink, ExitButton, Text, TextInput } from 'components';
import React from 'react';
import Link from 'next/link';
import styled, { useTheme } from 'styled-components';
import { Flex, FlexColAllCentered, FlexRow, FlexRowSpaceBetween } from 'styles/components';

const ModalComponent = ({ active, setActive, url }) => {



    return (
        <Modal active={active}>
            <StyledBlock>
                <ExitButton onClick={() => setActive(false)} src="/exit.svg" />
                <Text variant="title" color="black">You've been disguisefied!</Text>
                <StyledRow>
                    <TextInputContainer>
                        <CustomTextInput align="center" height="40px" margin="25px 0px 0px 0px" value={`disguisefy.xyz/${url}`} width="100%" readOnly />
                        <DisLogo src="disguisefy_logo.svg" />
                        <CopyLinkWrapper>
                            <CopyLink url={url} />
                        </CopyLinkWrapper>
                    </TextInputContainer>
                    <Button width="40px" height="40px" margin="25px 0 0px 10px">Go</Button>
                </StyledRow>
            </StyledBlock>
        </Modal>
    );
}

export default ModalComponent;

const Modal = styled(FlexColAllCentered) <{ active?: boolean }>`
    display: ${props => props.active ? 'flex' : 'none'};
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
`;

const TextInputContainer = styled.div`
    position:relative;
    width: 100%;
`

const StyledRow = styled(FlexRowSpaceBetween)`
    width: 100%;
`

const CopyLinkWrapper = styled.div`
    position: absolute;
`

const DisLogo = styled.img`
    width: 35px;
    position: absolute;
    top: 4px;
    left: 20px;
    z-index: 1;
`
const CustomTextInput = styled(TextInput)`
    position: relative;
    z-index:2;
`

const StyledBlock = styled(Block)`
    width: 500px;
    padding: 30px 40px;
    ${({ theme }) => theme.mediaWidth.sm`
        width:95%;
        max-width: 500px;
        padding: 30px 20px;
    `};
`