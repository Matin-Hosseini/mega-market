export default function HeaderHoverCard({
  trigger,
  children,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <span className="cursor-pointer">{trigger}</span>
      <div className="absolute bg-transparent w-[25rem] -left-[4rem] top-full pt-4 hidden invisible opacity-0 group-hover:block group-hover:visible group-hover:opacity-100">
        <div className="shadow-2xl p-3 rounded bg-background">{children}</div>
      </div>
    </div>
  );
}
