import { MAX_CASTS_TO_SHOW, PROFILE_DIMENSION } from '@/core/config/constants';

export default function MovieInfoSkeleton() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-[70vw] animate-pulse gap-5 overflow-hidden rounded-md border shadow md:w-[66vw] lg:w-[75vw]">
        <div className="hidden bg-slate-500 sm:block sm:w-1/3" />
        <div className="flex w-full flex-col gap-7 p-5 sm:w-2/3">
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
      <div className="flex w-[70vw] animate-pulse flex-col items-center gap-7 md:w-[66vw] lg:w-[75vw]">
        <div className="h-7 w-1/3 rounded-full bg-slate-500" />
        <div className="flex flex-wrap justify-center gap-5">
          {[...Array(MAX_CASTS_TO_SHOW)].map((_, idx) => (
            <div
              key={idx}
              style={{ width: PROFILE_DIMENSION.width }}
              className="overflow-hidden rounded-md border shadow"
            >
              <div
                style={{ width: PROFILE_DIMENSION.width, height: PROFILE_DIMENSION.height }}
                className="bg-slate-500"
              />
              <div className="grid grid-rows-2 gap-1 p-2">
                <div className="h-2 w-3/4 rounded-full bg-slate-500" />
                <div className="h-2 w-full rounded-full bg-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
