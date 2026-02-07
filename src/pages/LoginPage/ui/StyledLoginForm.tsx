import styled from "styled-components";

export const StyledLoginForm = styled.form`
    max-width: 340px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & legend{
        margin-bottom: 10px;
    }

    & button{
        align-self: flex-end;
    }
`

export default StyledLoginForm;