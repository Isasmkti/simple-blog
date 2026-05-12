import { trendingArticles } from '../data/seed';

export default function TrendingSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-10 mb-16">
      <div className="flex items-center gap-2 mb-8">
        <span className="material-symbols-outlined text-zinc-900" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
        <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-900">Trending on The Record</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {trendingArticles.map((article) => (
          <a key={article.id} href="/reading" className="flex gap-6 group">
            <div className="font-headline-h1 text-headline-h1 text-zinc-100 leading-none">{article.id}</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img alt={article.author} className="w-5 h-5 rounded-full grayscale" src={article.authorImg}/>
                <span className="font-label-sm text-label-sm text-zinc-900">{article.author}</span>
              </div>
              <h3 className="font-headline-h3 text-headline-h3 group-hover:text-secondary transition-colors line-clamp-2">{article.title}</h3>
              <p className="font-label-sm text-label-sm text-zinc-400">{article.date} · {article.readTime}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
