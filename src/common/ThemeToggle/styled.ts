import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.mode.background};
  color: ${({ theme }) => theme.mode.color};
  border: 1px solid ${({ theme }) => theme.mode.button};
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  span {
    font-family: inherit;
  }
`;

export const IconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.mode.color};
  transition: transform 0.3s ease;
  
  ${ToggleButton}:hover & {
    transform: rotate(${({ isDarkMode }) => isDarkMode ? '180deg' : '0deg'});
  }
`;