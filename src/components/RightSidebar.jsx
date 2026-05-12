import { staffPicks, topics, whoToFollow } from '../data/seed';

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block w-80 sticky top-24 h-fit">
      <div className="mb-10">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-900 mb-6">Staff Picks</h3>
        <div className="flex flex-col gap-6">
          {staffPicks.map(pick => (
            <div key={pick.id} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img alt={pick.author} className="w-4 h-4 rounded-full" src={pick.authorImg}/>
                <span className="font-label-sm text-[11px] font-semibold text-zinc-900">{pick.author}</span>
              </div>
              <h4 className="font-headline-h3 text-body-md font-bold leading-tight line-clamp-2">{pick.title}</h4>
            </div>
          ))}
        </div>
        <a className="inline-block mt-6 font-label-sm text-label-sm text-secondary hover:text-on-secondary-fixed-variant transition-colors" href="#">See the full list</a>
      </div>
      
      <div className="mb-10">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-900 mb-6">Topic Discovery</h3>
        <div className="flex flex-wrap gap-2">
          {topics.map(topic => (
            <a key={topic} className="px-4 py-2 bg-zinc-50 text-zinc-600 rounded-full font-label-sm text-[12px] hover:bg-zinc-100 transition-colors" href="#">{topic}</a>
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-900 mb-6">Who to follow</h3>
        <div className="flex flex-col gap-6">
          {whoToFollow.map(person => (
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
          ))}
        </div>
      </div>
    </aside>
  );
}
