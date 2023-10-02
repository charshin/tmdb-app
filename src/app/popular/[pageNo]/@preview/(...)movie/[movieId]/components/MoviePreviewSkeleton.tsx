export default function MoviePreviewSkeleton() {
  return (
    <div className="flex w-[calc(100vw*7/10)] animate-pulse gap-5 overflow-hidden rounded-md md:w-[calc(100vw*2/3)] lg:w-[calc(100vw*3/4)]">
      <div className="hidden bg-slate-500 sm:block sm:w-1/3" />
      <div className="flex w-full flex-col gap-7 sm:w-2/3">
        <div className="flex flex-col gap-4">
          <div className="h-10 w-1/2 rounded-full bg-slate-500" />
          <div className="h-2 w-1/3 rounded-full bg-slate-500" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-5 w-1/4 rounded-full bg-slate-500" />
          <div className="h-2 w-1/6 rounded-full bg-slate-500" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-5 w-1/4 rounded-full bg-slate-500" />
          <div className="grid grid-rows-5 gap-2">
            <div className="h-2 w-full rounded-full bg-slate-500" />
            <div className="h-2 w-full rounded-full bg-slate-500" />
            <div className="h-2 w-full rounded-full bg-slate-500" />
            <div className="h-2 w-full rounded-full bg-slate-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
