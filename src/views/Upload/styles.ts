import styled from 'styled-components';

import { fadeIn2, open } from 'helpers/animations';
import { STYLING } from 'helpers/config';

export const Wrapper = styled.div``;

export const HWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap-reverse;
	gap: 20px;
	margin: 0 auto 40px auto;
	h4 {
		color: ${(props) => props.theme.colors.font.primary};
		font-size: clamp(18px, 3.25vw, 24px);
		font-weight: ${(props) => props.theme.typography.weight.xBold};
		line-height: 1.5;
	}
`;

export const TRWrapper = styled.div`
	display: flex;
	align-items: center;
	> * {
		&:not(:last-child) {
			margin: 0 10px 0 0;
		}
		&:last-child {
			margin: 0;
		}
	}
`;

export const UploadWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 40px;
	@media (max-width: ${STYLING.cutoffs.initial}) {
		flex-direction: column;
	}
`;

export const UWrapper = styled.div`
	min-width: 400px;
	width: calc(100% - 625px);
	@media (max-width: ${STYLING.cutoffs.initial}) {
		min-width: 0;
		width: 100%;
	}
`;

export const TWrapper = styled.div`
	margin: 40px 0 0 0;
`;

export const SWrapper = styled.div`
	width: 625px;
	@media (max-width: ${STYLING.cutoffs.initial}) {
		width: 100%;
	}
`;

export const MWrapper = styled.div`
	padding: 0 20px 20px 20px;
`;

export const MInfo = styled.div`
	margin: 0 0 20px 0;
	span {
		color: ${(props) => props.theme.colors.font.primary};
		font-size: ${(props) => props.theme.typography.size.small};
		font-weight: ${(props) => props.theme.typography.weight.medium};
		line-height: 1.5;
	}
`;

export const MActions = styled.div`
	margin: 10px 0 0 0;
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	gap: 15px;
`;

export const AWrapper = styled.div``;

export const AContainer = styled.div`
	padding: 0 20px 20px 20px;
	animation: ${open} ${fadeIn2};
`;

export const AGraphic = styled.div`
	canvas {
		height: 300px !important;
	}
`;

export const AProgress = styled.div<{ percentage: string }>`
	height: 37.5px;
	width: 335px;
	max-width: 90vw;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 40px auto 0 auto;
	background: ${(props) => props.theme.colors.container.alt8.background};
	border: 1px solid ${(props) => props.theme.colors.border.primary};
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	span {
		color: ${(props) => props.theme.colors.font.light1};
		font-size: ${(props) => props.theme.typography.size.small};
		font-weight: ${(props) => props.theme.typography.weight.bold};
		line-height: 1.25;
		position: relative;
		z-index: 1;
		display: block;
		text-align: center;
	}
	> div {
		height: 100%;
		position: absolute;
		left: 0;
		width: ${(props) => props.percentage}%;
		background: ${(props) => props.theme.colors.container.alt6.background};
		transition: width 0.15s ease;
	}
`;

export const APercentage = styled.span`
	width: 30px;
`;

export const AMessage = styled.div`
	margin: 0 0 15px 0;
	max-width: 90vw;
	display: flex;
	span {
		color: ${(props) => props.theme.colors.font.alt2};
		font-size: ${(props) => props.theme.typography.size.small};
		font-weight: ${(props) => props.theme.typography.weight.bold};
		line-height: 1.5;
	}
`;
