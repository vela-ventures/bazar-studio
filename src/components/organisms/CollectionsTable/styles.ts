import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	h4 {
		color: ${(props) => props.theme.colors.font.alt2} !important;
		font-size: ${(props) => props.theme.typography.size.lg} !important;
		font-weight: ${(props) => props.theme.typography.weight.bold} !important;
		line-height: 1.5 !important;
	}
`;

export const Body = styled.div`
	p {
		max-width: 500px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export const CWrapper = styled.div`
	margin: auto;
`;

export const TMessage = styled.div`
	margin: 5px 0 0 0;
	span {
		color: ${(props) => props.theme.colors.font.alt1};
		font-size: ${(props) => props.theme.typography.size.xxSmall};
		font-weight: ${(props) => props.theme.typography.weight.bold};
	}
`;

export const MWrapper = styled.div`
	span {
		color: ${(props) => props.theme.colors.warning};
		font-size: ${(props) => props.theme.typography.size.xSmall};
		font-weight: ${(props) => props.theme.typography.weight.medium};
		display: block;
		margin: 0 0 5px 0;
	}
`;

export const DWrapper = styled.div`
	height: fit-content;
	width: fit-content;
	position: relative;
	margin: 5px auto 0 auto;
`;

export const DDropdown = styled.ul<{ open: boolean }>`
	width: 225px;
	padding: 10px 0;
	display: ${(props) => (props.open ? 'block' : 'none')};
	position: absolute;
	top: 26.5px;
	right: 15%;
	z-index: 1;
`;

export const LI = styled.li<{ disabled: boolean }>`
	pointer-events: ${(props) => (props.disabled ? 'none' : 'default')};
	text-align: center;
	height: 32.5px;
	display: flex;
	align-items: center;
	cursor: pointer;
	color: ${(props) => props.theme.colors.font.primary};
	font-size: ${(props) => props.theme.typography.size.xSmall};
	font-weight: ${(props) => props.theme.typography.weight.bold};
	background: ${(props) => (props.disabled ? props.theme.colors.button.primary.disabled.background : 'transparent')};
	padding: 0 15px;
	&:hover {
		background: ${(props) =>
			props.disabled
				? props.theme.colors.button.primary.disabled.background
				: props.theme.colors.container.primary.active};
	}
`;

export const MCWrapper = styled.div`
	padding: 0 20px 20px 20px;
`;

export const MBody = styled.div``;

export const MHeader = styled.div`
	margin: 0 0 20px 0;
	p {
		color: ${(props) => props.theme.colors.font.primary};
		font-size: ${(props) => props.theme.typography.size.small};
		font-weight: ${(props) => props.theme.typography.weight.bold};
	}
`;

export const MActions = styled.div`
	width: fit-content;
	display: flex;
	margin: 20px 0 0 auto;
	> * {
		&:not(:last-child) {
			margin: 0 15px 0 0;
		}
		&:last-child {
			margin: 0;
		}
	}
`;
