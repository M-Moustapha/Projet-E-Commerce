type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      {children}
    </div>
  );
}