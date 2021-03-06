import React, { FC, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactTooltip from "react-tooltip";

interface TooltipProps {
    type?: string, 
    content: string, 
    variant?: string, 
    id:string
}

const TooltipComponent:FC<TooltipProps> = ({type, content, variant, id}) => {
    const node = useRef();
    return (
        <Tooltip variant={variant}>
            <a data-tip data-for={id}>
                <InfoIcon
                    variant={variant}
                    src={type == 'blue' ? "/static/information-circle-blue.svg" : "/static/information-circle.svg"} />
            </a>
            <ReactTooltip className="react-tooltip-style" id={id} place="top" type="dark" effect="solid" multiline={true}>
                <span>{content}</span>
            </ReactTooltip>
        </Tooltip>
    );
}

export default TooltipComponent;

const Tooltip = styled.div<{variant?: string}>`
    top: -4px;
    right: -4px;
    position: relative;
    ${props => props.variant == "dashboard" &&
        css`
            top: 0px;
        `
    };
    .react-tooltip-style{
        width: 220px;
    }
`;

const InfoIcon = styled.img<{variant?: string}>`
    height: 15px;
    width: 15px;
    ${props => props.variant == "dashboard" && (
        css`
            height: 13px;
            width: 13px;
        `
    )};
`