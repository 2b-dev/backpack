import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18.923 4.038a1.385 1.385 0 0 1 1.385 1.385V9H18V7.692a.692.692 0 0 0-.612-.687L17.308 7h-3.616a.692.692 0 0 0-.688.611L13 7.692V9h-2V7.692a.692.692 0 0 0-.612-.687L10.308 7H6.692a.692.692 0 0 0-.687.611L6 7.692V9H3.692V5.423a1.385 1.385 0 0 1 1.385-1.385zM21 19.961h-1.45c-.664 0-1.55-.578-1.55-1.291V16H6v2.67c0 .68-.808 1.239-1.459 1.288l-.091.003H3v-8.577A1.385 1.385 0 0 1 4.384 10h15.231A1.385 1.385 0 0 1 21 11.384z" /></svg>);