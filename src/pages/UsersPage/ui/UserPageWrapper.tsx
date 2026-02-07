import styled from "styled-components";

export const UserPageWrapper = styled.section`
    max-width: 1440px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    column-gap: 40px;
    row-gap: 40px;
    padding: 40px;
    margin: 0 auto;

    & button{
        justify-self: flex-start;
    }
`

export default UserPageWrapper;