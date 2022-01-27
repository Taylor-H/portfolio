import styled from 'styled-components';
import { BsChevronContract, BsChevronExpand } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { GrMysql, GrHeroku, GrStorage, GrNode, GrReactjs, GrCss3, GrHtml5 } from 'react-icons/gr';
import { DiResponsive } from 'react-icons/di';
import { MdClose, MdOutlineSchema } from 'react-icons/md';
import { SiSequelize, SiExpress } from 'react-icons/si';
import {
  FaGithub,
  FaGithubAlt,
  FaChevronRight,
  FaChevronDown, FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { Caret } from './Caret';
import { File } from './File';
import { ImNewTab } from 'react-icons/im';


const theme = { colors: { primary: '#fef7ee', primaryHighlight: "#ffe8c4", secondary: '#91b9c8', transBlack: "#00000097", peachy: "#fcf2e3", paleGreen: "#f9ffc4"} };


export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.5s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
  @media (min-width: 1920px) {
    width: 15%;
  }
  @media (min-width: 2560px) {
    width: 10%;
  }
  @media (min-width: 3840px) {
    width: 5%;

  }
`;

export const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  @media (max-width: 768px) {

    width: 100%;
  }
  @media (min-width: 769px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
  @media (min-width: 1920px) {
    width: 15%;
  }
  @media (min-width: 2560px) {
    width: 10%;
  }
  @media (min-width: 3840px) {
    width: 5%;

  }
`;

export const StyledNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 0 2rem;
  background: ${theme.colors.primary};
  @media (max-width: 768px) {
    height: 10vh;
  }
  @media (min-width: 769px) {
    height: 10vh;
  }
  @media (min-width: 1024px) {
    height: 10vh;
  }
  @media (min-width: 1440px) {
    height: 10vh;
  }
  @media (min-width: 1920px) {
    height: 10vh;
  }
  @media (min-width: 2560px) {
    height: 10vh;
  }
  @media (min-width: 3840px) {
    height: 10vh;

  }
`;
export const StyledNavHeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.secondary};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;

  }
  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
  @media (min-width: 3840px) {
    font-size: 1.5rem;

  }
`;
export const NewTab = styled(ImNewTab)`
  color: black;
  font-size: 1.5rem;
`;
export const CaretIconBlack = styled(Caret)`
  color: "black";
`;
export const FileIcon = styled(File)`
  color: "#000";
  font-size: 1.5rem;
  `;
export const FaGithubIcon = styled(FaGithub)`
  color: black;
  font-size: 1.5rem;
  `;
export const BsChevronContractIcon = styled(BsChevronContract)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const BsChevronExpandIcon = styled(BsChevronExpand)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;

export const FiMenuIcon = styled(FiMenu)`
  background: '#00000000';
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const MdCloseIcon = styled(MdClose)`
  background: '#00000000';
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const ChevronIconRight = styled(FaChevronRight)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;
`;
export const ChevronIconDown = styled(FaChevronDown)`
  color: #000000;
  font-size: 1.5rem;
`;
export const ChevronIconRTrans = styled(FaChevronRight)`
  color: #00000000;
  width: 1.5rem;
  height: 1.5rem;
`;
export const MenuIcon = styled(FiMenu)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const MySqlDolphin = styled(GrMysql)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const HerokuIcon = styled(GrHeroku)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const SequelizeIcon = styled(SiSequelize)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const DatabaseIcon = styled(GrStorage)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const NodeJS = styled(GrNode)`
  width: 1.5rem;
  height: 1.5rem;`;
export const ReactJS = styled(GrReactjs)`
  width: 1.5rem;
  height: 1.5rem;`;
export const CSS = styled(GrCss3)`
  width: 1.5rem;
  height: 1.5rem;`;
export const HTML5 = styled(GrHtml5)`
  width: 1.5rem;
  height: 1.5rem;`;
export const ExpressIcon = styled(SiExpress)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const GithubSmallIcon = styled(FaGithubAlt)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const SchemaIcon = styled(MdOutlineSchema)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const ResponsiveIcon = styled(DiResponsive)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;


