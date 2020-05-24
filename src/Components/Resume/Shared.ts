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

interface ContentProps {
  fontColor?: string;
}

interface CardProps {
  color?: string;
  height?: string;
  width?: string;
}

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: ${(props: SectionProps) => props.height || "100vh"};
  background-color: ${(props: SectionProps) => props.color};
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: "Noto Sans", sans-serif;
  padding-bottom: 5%;
  @media only screen and (max-width: 700px) {
    height: 100%;
    min-height: 100%;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: ContainerProps) => props.alignItems || "center"};
  justify-content: ${(props: ContainerProps) =>
    props.justifyContent || "center"};
  width: ${(props: ContainerProps) => props.width || "unset"};
  height: ${(props: ContainerProps) => props.height || "unset"};
  @media only screen and (max-width: 700px) {
    flex-direction: ${(props: ContainerProps) =>
      props.sameOnPhone ? "row" : "column"};
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: ContainerProps) => props.alignItems || "center"};
  justify-content: ${(props: ContainerProps) =>
    props.justifyContent || "center"};
  width: ${(props: ContainerProps) => props.width || "unset"};
  height: ${(props: ContainerProps) => props.height || "unset"};
  @media only screen and (max-width: 700px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
  border: 10px solid #5b6b5d;
  width: 300px;
  @media only screen and (max-width: 700px) {
    width: 100px;
  }
`;

export const Title = styled.h1`
  font-family: "Noto Sans", sans-serif;
  text-decoration: none;
  font-size: 82px;
  font-weight: bold;
  color: ${(props: ContentProps) => props.fontColor || "white"};
  @media only screen and (max-width: 700px) {
    font-size: 32px;
  }
`;

export const Title2 = styled.h2`
  font-family: "Noto Sans", sans-serif;
  text-decoration: none;
  font-size: 32px;
  padding: 0;
  margin: 1%;
  font-weight: normal;
  color: ${(props: ContentProps) => props.fontColor || "white"};
  @media only screen and (max-width: 700px) {
    font-size: 22px;
  }
`;

export const TitleLink = styled.a`
  font-family: "Noto Sans", sans-serif;
  text-decoration: none;
  font-size: 82px;
  font-weight: bold;
  color: ${(props: ContentProps) => props.fontColor || "white"};
  @media only screen and (max-width: 700px) {
    font-size: 32px;
  }
`;

export const Paragraph = styled.p`
  color: ${(props: ContentProps) => props.fontColor || "white"};
  padding: 1%;
  font-size: 20px;
  text-align: left;
  font-family: "Noto Sans", sans-serif;
  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  font-weight: normal;
  color: white;
  text-decoration: none;
  color: white;
`;

export const Card = styled.div`
  box-shadow: 0 12px 9px 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: ${(props: CardProps) => props.color || "white"};
  color: black;
  text-align: left;
  padding: 2%;
  border-radius: 10px;
  height: ${(props: ContainerProps) => props.height || "unset"};
  width: ${(props: ContainerProps) => props.width || "unset"};
  @media only screen and (max-width: 700px) {
    height: 100%;
    width: unset;
  }
`;
