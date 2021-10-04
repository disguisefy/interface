import { Button, CopyLink, Text } from 'components';
import moment from 'moment';
import React from 'react';
import { Links, Menu } from 'sections/shared';
import styled, { useTheme } from 'styled-components';
import { Flex, FlexCol, FlexRowCentered } from 'styles/components';
import Link from 'next/link';

const DetailsPanelComponent = ({ loading, data }) => {
    const theme = useTheme()
    const onCopyClick = () => {
        navigator.clipboard.writeText(`disguisefy.xyz/${data?.disguise?.url}`)
    }
    return (
        <Wrapper>
            <DisLogo src="disguisefy_logo.svg" />
            <DetailsPanel>
                {
                    (!loading && data !== 404) && (
                        <div>
                            <Text variant="subtitle">{data?.disguise.name}</Text>
                            <StyledFlexRowCentered margin="5px 0 0 0">
                                <Text color={theme.accent} variant="normal">disguisefy.xyz/{data?.disguise?.url}</Text>
                                <CopyLink variant="details" url={`${data?.disguise?.url}`} />
                            </StyledFlexRowCentered>
                            <Text margin="5px 0 0 0" variant="normal" color="lightgrey">Expires {data && moment.unix(data?.disguise?.expiration).format("MMMM Do YYYY, h:mm a")}</Text>
                        </div>
                    )
                }
                <Mobile>
                    <Link href="/">
                        <Button width="85px" size="small">New</Button>
                    </Link>
                </Mobile>
                <BatLoverImg src="batlover_img.svg" />
            </DetailsPanel>
            <LinksWrapper>
                <Link href="/">
                    <Button width="85px" size="small">New</Button>
                </Link>
            </LinksWrapper>
        </Wrapper>
    );
}

export default DetailsPanelComponent;


const Wrapper = styled.div`
    position: relative;
    grid-column: 1/5;
    justify-self: flex-end;
    width: 350px;
    ${({ theme }) => theme.mediaWidth.xl`
        grid-column: 1/4;
        width: 300px;
    `};
    ${({ theme }) => theme.mediaWidth.lg`
        justify-self: flex-start;
        grid-column: 1/13;
        width: 100%;
        display: flex;
        justify-content: space-between;
        max-width: 1100px;
        justify-self: center;
    `};
    ${({ theme }) => theme.mediaWidth.sm`
        flex-direction: column;
    `};
`
const DetailsPanel = styled(FlexCol)`
    position: relative;
    min-height: 100px;
    border: 1px dotted ${({ theme }) => theme.accent};
    padding: 20px;
    background-color: ${({ theme }) => theme.bg16};
    border-radius: 14px 0 0 14px;
    border-style: dashed none dashed dashed;
    z-index: 2;
    ${({ theme }) => theme.mediaWidth.lg`
        min-height: 120px;
        bottom: -20px;
        border-radius: 14px 14px 0 0;
        border-style: dashed dashed dashed dashed;
        width: 350px;
        padding-bottom: 30px;
    `};
    ${({ theme }) => theme.mediaWidth.md`
        padding-bottom: 20px;
        // min-height: 120px;
    `};
    ${({ theme }) => theme.mediaWidth.sm`
        order: 2;
        width: 100%;
        margin-top: -10px;
        display: flex;
        min-height: 120px;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 30px;
    `};
    ${({ theme }) => theme.mediaWidth.xs`
        padding-bottom: 30px;
    `};
`;

const StyledFlexRowCentered = styled(FlexRowCentered)`
    position: relative;
`

const Mobile = styled.div`
    display: none;
    ${({ theme }) => theme.mediaWidth.sm`
    display: block;
    `};
`


const BatLoverImg = styled.img`
    position:fixed;
    width: 220px;
    bottom: 0px;
    ${({ theme }) => theme.mediaWidth.lg`
        display: none;
    `};
`

const DisLogo = styled.img`
    width: 40px;
    position: absolute;
    top: -22px;
    left: 40px;
    z-index: 1;
    ${({ theme }) => theme.mediaWidth.lg`
    display: none;
    `};
`

const LinksWrapper = styled.div`
    display: none;
    ${({ theme }) => theme.mediaWidth.lg`
        display: flex;
        margin-top: 20px;
        align-items: center;
        height: fit-content;
    `};
    ${({ theme }) => theme.mediaWidth.sm`
        display: none;
    `};
`