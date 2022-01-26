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


const theme = { colors: { primary: '#fef7ee', primaryHighlight: "#ffe8c4", secondary: '#91b9c8', transBlack: "#00000097", } };
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


