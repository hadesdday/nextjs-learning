export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  console.log("rendered header");
  return <div className="header">header here</div>;
}
