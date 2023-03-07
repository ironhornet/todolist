import styled from '@emotion/styled';

export const  styldContainerStylee  = `display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;
margin-bottom: 15px;
background-color: #fff;
box-shadow: 8px 9px 17px -10px rgba(0, 0, 0, 0.24);
border-radius: 8px;
width: 700px;

@media (max-width: 768px) {
  width: 400px;
}
@media (max-width: 425px) {
  width: 300px;
}`

export const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 70px);
`;
export const StyledTextWrapper = styled.div`
  margin: 0 15px;
  width: 100%;
  input {
    margin-bottom: 10px;
  }
`;
export const StyledTitle = styled.h3`
  line-height: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  word-wrap: break-word;
  width: calc(100% - 56px);
`;
export const StyledText = styled.p`
  word-wrap: break-word;
  width: calc(100% - 56px);
`;

export const StyledButton = styled.button`
  margin-right: 10px;
`;
