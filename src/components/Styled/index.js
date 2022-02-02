import styled from 'styled-components';
import { MdOutlineSchema } from 'react-icons/md';
import { BsChevronContract, BsChevronExpand } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import {
  GrGithub,
  GrMysql,
  GrHeroku,
  GrStorage,
  GrNode,
  GrReactjs,
  GrCss3,
  GrHtml5,
  GrMenu,
  GrClose,
  GrTree,
  GrArticle,
  GrAscend,
  GrDescend,
  GrDomain,
  GrFolder,
} from 'react-icons/gr';

import { DiResponsive } from 'react-icons/di';
import {
  SiSequelize,
  SiExpress,
} from 'react-icons/si';


import { Caret } from './Caret';
import { File } from './File';
import { ImNewTab } from 'react-icons/im';
import * as GrommetIcons from 'react-icons/gr';
import * as FAIcons from 'react-icons/fa';

const theme = {
  colors: {
    primary: '#000',
    primaryHighlight: '#91b9c8',
    secondary: '#91b9c8',
    transBlack: '#00000097',
    transWhite: '#ffffff97',
    trans: "#00000000",
    paleOrange: '#fef7ee',
    peachy: '#fcf2e3',
    paleGreen: '#f9ffc4',
  },
  sizing: {
    xsmall: '.5rem',
    small: '1rem',
    medium: '50px',
    large: '3rem',
    xlarge: '4rem',
    xxlarge: '5rem',
  },
};
// console.log('theme', GithubIconAlt);
const iconFamilies = {
  Grommet: GrommetIcons,
  FontAwesome: FAIcons,
};

export const PageIcon = styled(GrArticle)`
width: theme.sizing.medium;
height: theme.sizing.medium;
fill: theme.colors.primary;
`;
export const FolderIcon = styled(GrFolder)`
  width: theme.sizing.medium;
  height: theme.sizing.medium;
  fill: theme.colors.primary;
`;
export const SiteIcon = styled(GrDomain)`
  min-width: theme.sizing.large;
  min-height: theme.sizing.large;
  fill: theme.colors.secondary;
`;
export const Button = styled.button`
  margin: 0 auto;
  background: ${theme.colors.trans};
  border: none;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
// export const IconDiv = (props) => styled.div`
// width: 50px;
// height: 50px;
//   ${props} {
//     color: '#91b9c8';
//     &:hover {
//     color: ${theme.colors.primary};
//   }
// `;
// export const IconButtonMaker = styled(({ family, name, size, color, ...rest }) => {
//   return (
//     <Button  {...rest}>
//       <Icon {...{ family, name, size, color }} />
//     </Button>
//   );
// })``
export const CloseMenuIcon = styled(GrClose)`
  color: green;
  font-size: 3rem;
`;
export const OpenMenuIcon = styled(GrMenu)`
  color: green;
  font-size: 3rem;
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

export const BsChevronContractIcon = styled(BsChevronContract)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const BsChevronExpandIcon = styled(BsChevronExpand)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`
// export const { GithubIconAlt } = styled(FAIcons.FaGithubAlt)`
//   color: ${theme.colors.primary};
//   font-size: 3rem;`;

const GithubAlt = iconFamilies.FontAwesome.FaGithubAlt;
export const GithubIconSmall = styled(GithubAlt)`
  color: ${theme.colors.primary};
  font-size: 2rem;
`;
export const FaGithubIcon = styled(GrGithub)`
  color: black;
  font-size: 1.5rem;
`;
export const FiMenuIcon = styled(FiMenu)`
  background: '#00000000';
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const MdCloseIcon = styled(GrClose)`
  background: '#00000000';
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
// export const ChevronIconRight = styled(FaChevronRight)`
//   color: #000000;
//   width: 1.5rem;
//   height: 1.5rem;
// `;
// export const ChevronIconDown = styled(FaChevronDown)`
//   color: #000000;
//   font-size: 1.5rem;
// `;
// export const ChevronIconRTrans = styled(FaChevronRight)`
//   color: #00000000;
//   width: 1.5rem;
//   height: 1.5rem;
// `;
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

export const SchemaIcon = styled(MdOutlineSchema)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;
export const ResponsiveIcon = styled(DiResponsive)`
  color: #000000;
  width: 1.5rem;
  height: 1.5rem;`;

export const StyledSlideMenu = styled.div`
  background: ${theme.colors.paleOrange};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;









export const StyledNavContainerCol = styled.div`
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
