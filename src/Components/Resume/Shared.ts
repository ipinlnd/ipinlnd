import styled from "styled-components";

interface SectionProps {
  color: string;
  height?: string;
}

interface ContainerProps {
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  sameOnPhone?: boolean;
}

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  height: ${(props: SectionProps) => props.height || "100%"};
  background-color: ${(props: SectionProps) => props.color};
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Noto Sans', sans-serif;
  padding-bottom: 5%;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: ContainerProps) => props.alignItems || "center"};
  justify-content: ${(props: ContainerProps) => props.justifyContent || "center"};
  width: ${(props: ContainerProps) => props.width || "unset"};
  height: ${(props: ContainerProps) => props.height || "unset"};
  @media only screen and (max-width: 700px) {
    flex-direction: ${(props: ContainerProps) => props.sameOnPhone ? "row" : "column"};
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: ContainerProps) => props.alignItems || "center"};
  justify-content: ${(props: ContainerProps) => props.justifyContent || "center"};
  width: ${(props: ContainerProps) => props.width || "unset"};
  height: ${(props: ContainerProps) => props.height || "unset"};
  @media only screen and (max-width: 700px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

export const Avatar = styled.img`
  border-radius: 100%;
  border: 10px solid #5B6B5D;
  width: 300px;
  @media only screen and (max-width: 700px) {
    width: 100px;
  }
`

export const Link = styled.a`
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  font-weight: normal;
  color: white;
  text-decoration: none;
  color: white;
`