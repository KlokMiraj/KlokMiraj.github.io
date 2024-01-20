"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$h": () => (/* binding */ BlogCard),
/* harmony export */   "Ef": () => (/* binding */ HeaderThree),
/* harmony export */   "Ei": () => (/* binding */ Img),
/* harmony export */   "Ew": () => (/* binding */ ExternalLinks),
/* harmony export */   "Hr": () => (/* binding */ Hr),
/* harmony export */   "PS": () => (/* binding */ TagList),
/* harmony export */   "T5": () => (/* binding */ GridContainer),
/* harmony export */   "Vp": () => (/* binding */ Tag),
/* harmony export */   "oY": () => (/* binding */ TitleContent),
/* harmony export */   "rv": () => (/* binding */ UtilityList),
/* harmony export */   "tg": () => (/* binding */ CardInfo)
/* harmony export */ });
/* unused harmony exports GridRow, Intro */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "sc-lor4jz-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "sc-lor4jz-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const GridRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__GridRow",
  componentId: "sc-lor4jz-2"
})(["display:flex;justify-content:space-between;margin-bottom:2rem;.grid-card{flex:1;max-width:calc(33.33% - 1rem);}"]);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "sc-lor4jz-3"
})(["background:linear-gradient(145deg,", ",", ");color:", ";box-shadow:0 4px 8px rgba(0,0,0,0.5);border-radius:10px;overflow:hidden;transition:box-shadow 0.3s ease-in-out,transform 0.3s ease;margin:1rem;padding:1rem;&:hover{background:linear-gradient(145deg,", ",", ");box-shadow:0 6px 12px rgba(0,0,0,0.8);transform:translateY(-3px);", "}@media ", "{margin:1rem 0;}"], props => props.theme.colors.background2, props => props.theme.colors.primary1, props => props.theme.colors.background1, props => props.theme.colors.accent1, props => props.theme.colors.button, ''
/* background: linear-gradient(145deg, ${(props) => props.theme.colors.background2}, ${(props) => props.theme.colors.primary1}); // More subtle gradient */
, props => props.theme.breakpoints.sm);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "sc-lor4jz-4"
})(["font-weight:600;letter-spacing:1px;color:", ";padding:0.5rem 0;text-shadow:1px 1px 1px rgba(0,0,0,0.2);"], props => props.theme.colors.accent1);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "sc-lor4jz-5"
})(["color:", ";font-weight:bold;"], props => props.theme.colors.button); // export const CardInfo = styled.p`
//   width: 100%;
//   padding: 0 50px;
//   color: #e4e6e7;
//   font-style: 2rem;
//   line-height: 24px;
//   text-align: justify;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding:.3rem
// }
// `;

const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "sc-lor4jz-6"
})(["color:#e4e6e7;font-size:1rem;line-height:1.6;text-align:justify;padding:0 1rem;@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "sc-lor4jz-7"
})(["text-align:center;z-index:20;width:100%;"]); // export const HeaderThree = styled.h3`
//   font-weight: 500;
//   letter-spacing: 2px;
//   color: #9cc9e3;
//   padding: .5rem 0;
//   font-size: ${(props) => props.title ? '3rem' : '2rem'};
// `;

const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "sc-lor4jz-8"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "sc-lor4jz-9"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "sc-lor4jz-10"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;li{display:inline-block;margin-right:10px;&:last-child{margin-right:0;}i{margin-right:5px;}}"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "sc-lor4jz-11"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#d4c0c0;transform:scale(1.05);transition:transform 0.3s ease-in-out,color 0.3s ease-in-out;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "sc-lor4jz-12"
})(["display:flex;justify-content:space-around;padding:2rem;"]); // export const Tag = styled.li`
// color: #d8bfbf;
// font-size: 1.5rem;
// `

/***/ }),

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ Section),
/* harmony export */   "Bn": () => (/* binding */ ButtonFront),
/* harmony export */   "NZ": () => (/* binding */ SectionTitle),
/* harmony export */   "dv": () => (/* binding */ SectionDivider),
/* harmony export */   "jp": () => (/* binding */ ButtonBack),
/* harmony export */   "r4": () => (/* binding */ SectionText)
/* harmony export */ });
/* unused harmony exports SectionSubText, SecondaryBtn, LinkContainer, LinkIconImg */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-55o187-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-55o187-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '65px' : '56px', props => props.main ? '72px' : '56px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-55o187-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-55o187-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-55o187-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-55o187-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-55o187-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-55o187-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-55o187-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-55o187-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');

/***/ })

};
;