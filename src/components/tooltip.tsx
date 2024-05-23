import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react"
import styled, { css } from "styled-components";

type tooltipProps = {
    content:        ReactNode;
    children:       ReactNode;
    delay?:         number;
    disabled?:      boolean;
    direction?:     'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    customStyle?:   CSSProperties;
}

const TooltipWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
const TooltipContent = styled.div<{ $direction: string, $visible: boolean, $customStyle?: CSSProperties }>`
    position: absolute;
    visibility: ${props => props.$visible ? 'visible' : 'hidden'};
    z-index: 999;
    ${props => props.$customStyle ?
        null
        :
        css`
            background-color: #1a2735;
            color: #fff;
            padding: 2px 8px;
            min-width: 30px;
            min-height: 22px;
            text-align: left;
            text-decoration: none;
            word-wrap: break-word;
            border-radius: 5px;
            box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .1215686275), 0 6px 16px rgba(0, 0, 0, .0784313725), 0 9px 28px 8px rgba(0, 0, 0, .0509803922);
        `
    };
`

// Component
const Tooltip = ({
    content,    
    children,   
    delay       = 0,
    disabled    = false,
    direction   = 'top',
    customStyle
    }: tooltipProps) => {
        const [visible, setVisible] = useState<boolean>(false);
        const timeoutID = useRef<NodeJS.Timeout | null>(null);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const tooltipRef = useRef<HTMLDivElement>(null);
        const tooltipGap = useRef<number>(5);
        
        useEffect(() => {
           if (disabled) setVisible(false);
           
        },[disabled]);
        useEffect(() => {
            const setSubPosition = (target: HTMLDivElement, ) => {
                if (direction.endsWith('Right'))        target.style.right = `${0}`;
                else if (direction.endsWith('Left'))    target.style.left = `${0}`;
                else if (direction.endsWith('Top'))     target.style.top = `${0}`;
                else if (direction.endsWith('Bottom'))  target.style.bottom = `${0}`;
            };
            if (tooltipRef.current && wrapperRef.current){
                if (direction.startsWith('top')) {
                    tooltipRef.current.style.bottom = `${wrapperRef.current.offsetHeight + tooltipGap.current}px`;
                    setSubPosition(tooltipRef.current);

                } else if (direction.startsWith('right')) {
                    tooltipRef.current.style.left = `${wrapperRef.current.offsetWidth + tooltipGap.current}px`;
                    setSubPosition(tooltipRef.current);

                } else if (direction.startsWith('bottom')) {
                    tooltipRef.current.style.top = `${wrapperRef.current.offsetHeight + tooltipGap.current}px`;
                    setSubPosition(tooltipRef.current);

                } else if (direction.startsWith('left')) {
                    tooltipRef.current.style.right = `${wrapperRef.current.offsetWidth + tooltipGap.current}px`;
                    setSubPosition(tooltipRef.current);
                }
            }
            
        },[direction])
        
        const handler = {
            showTooltip: () => {
                if (disabled) return;
                if (delay && delay > 0) {
                    const id = setTimeout(() => 
                        setVisible(true)
                    , delay * 1000);
                    timeoutID.current = id;
                } else {
                    setVisible(true);
                }
            },
            hideTooltip: () => {
                if (delay && timeoutID.current) {
                    clearTimeout(timeoutID.current);
                    timeoutID.current = null;
                }
                if (delay && delay < 0) {
                    const id = setTimeout(() =>
                        setVisible(false)
                    , (delay * -1) * 1000)
                    timeoutID.current = id;
                    return
                }
                setVisible(false);
            }
        }

        return (
            <TooltipWrapper className='tooltip-wrapper'
                ref={wrapperRef}
                onMouseEnter={handler.showTooltip}
                onMouseLeave={handler.hideTooltip}
                >
                <TooltipContent
                    ref={tooltipRef}
                    style={customStyle}
                    $direction={direction}
                    $visible={visible}
                    >
                    {content}
                </TooltipContent>
                {children}
            </TooltipWrapper>
        )
    }

export default Tooltip;