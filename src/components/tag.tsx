export default function Tag({ title }: { title: string }) {
  return (
    <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 inline-block rounded">
      {title}
    </span>
  );
}
