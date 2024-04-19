import styled from "styled-components";

export const SectionCatalog = styled.section`
  padding: 40px 0px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 44px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 60px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.color.textchange};
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;
  background-color: ${({ theme }) => theme.color.pageBg};
  color: ${({ theme }) => theme.color.textchange};

  &:focus,
  &:focus-visible {
    outline: none;
    border: 3px solid ${({ theme }) => theme.color.orange};
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: ${({ theme }) => theme.color.textchange};
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    background-color: ${({ theme }) => theme.color.pageBg};
  }

  &:not(:focus) + span {
    color: ${({ theme }) => theme.color.textchange};
  }
`;

export const InputPlaceholder = styled.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.textchange};
  pointer-events: none;
  transition: 0.6s;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const WrapperSearch = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;
