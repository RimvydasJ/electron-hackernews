import styled from 'styled-components'

export const Container = styled.div`
   display:flex;
   flex-direction:column;
   width:20%;
   overflow:hidden;
   overflow-y:auto;
   scrollbar-width: unset;
   height:100%;
   border-right: 1px solid white;
   align-items:center;
   &::-webkit-scrollbar{
      display:none;
   }
`