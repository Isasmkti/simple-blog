import { useStaffPicksStore, useTopicsStore, useWhoToFollowStore } from '../stores/useSidebarStore';

export default function RightSidebar() {
  const { formattedPicks, loading: picksLoading } = useStaffPicksStore();
  const { topicNames, loading: topicsLoading } = useTopicsStore();
  const { formattedAuthors, loading: authorsLoading } = useWhoToFollowStore();

  return (
    <aside className="hidden lg:block w-80 sticky top-24 h-fit">
      <div className="mb-10">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-900 mb-6">Staff Picks</h3>
        <div className="flex flex-col gap-6">
          {picksLoading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-1 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-zinc-200" />
                  <div className="h-3 w-20 bg-zinc-200 rounded" />
                </div>
                <div className="h-4 w-full bg-zinc-200 rounded" />
              </div>
            ))
          ) : (
            formattedPicks.map(pick => (
              <div key={pick.id} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img alt={pick.author} className="w-4 h-4 rounded-full" src={pick.authorImg}/>
                  <span className="font-label-sm text-[11px] font-semibold text-zinc-900">{pick.author}</span>
                </div>
                <h4 className="font-headline-h3 text-body-md font-bold leading-tight line-clamp-2">{pick.title}</h4>
              </div>
            ))
          )}
        </div>
        <a className="inline-block mt-6 font-label-sm text-label-sm text-secondary hover:text-on-secondary-fixed-variant transition-colors" href="#">See the full list</a>
      </div>
      
      <div className="mb-10">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-900 mb-6">Topic Discovery</h3>
        <div className="flex flex-wrap gap-2">
          {topicsLoading ? (
            [1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-20 bg-zinc-100 rounded-full animate-pulse" />
            ))
          ) : (
            topicNames.map(topic => (
              <a key={topic} className="px-4 py-2 bg-zinc-50 text-zinc-600 rounded-full font-label-sm text-[12px] hover:bg-zinc-100 transition-colors" href="#">{topic}</a>
            ))
          )}
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-900 mb-6">Who to follow</h3>
        <div className="flex flex-col gap-6">
          {authorsLoading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between animate-pulse">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-200" />
                  <div className="flex flex-col gap-1">
                    <div className="h-3 w-24 bg-zinc-200 rounded" />
                    <div className="h-2 w-32 bg-zinc-100 rounded" />
                  </div>
                </div>
                <div className="h-7 w-16 border border-zinc-200 rounded-full" />
              </div>
            ))
          ) : (
            formattedAuthors.map(person => (
              <div key={person.id} className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <img alt={person.name} className="w-8 h-8 rounded-full" src={person.img}/>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-sm font-bold">{person.name}</span>
                    <span className="font-label-sm text-[11px] text-zinc-400 line-clamp-1">{person.description}</span>
                  </div>
                </div>
                <button className="px-4 py-1.5 border border-zinc-900 text-zinc-900 rounded-full font-label-sm text-[12px] hover:bg-zinc-900 hover:text-white transition-colors">Follow</button>
              </div>
            ))
          )}
        </div>
      </div>
    </aside>
  );
}
