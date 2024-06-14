export default function SampleNextArrow({ className, style, onClick }: any) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
}
