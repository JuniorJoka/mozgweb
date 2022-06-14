export default interface IconButtonProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  active: boolean;
  reversed?: boolean;
  children: React.ReactNode;
}
