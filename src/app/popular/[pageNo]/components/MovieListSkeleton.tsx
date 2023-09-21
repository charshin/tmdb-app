import { BACKDROP_DIMENSION, PAGE_SIZE } from '@/core/config/constants';

export default async function MovieListSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {[...Array(PAGE_SIZE)].map((_, idx) => (
        <div key={idx} className="animate-pulse overflow-hidden rounded-md border shadow">
          <div
            style={{ width: BACKDROP_DIMENSION.width, height: BACKDROP_DIMENSION.height }}
            className="bg-slate-500"
          />
          <div className="grid grid-rows-2 gap-4 p-4">
            <div className="h-2 rounded bg-slate-500"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-2 rounded bg-slate-500"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
