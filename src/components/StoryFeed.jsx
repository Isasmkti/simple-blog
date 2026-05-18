import { Fragment } from 'react';
import { useArticlesStore } from '../stores/useArticlesStore';

export default function StoryFeed() {
  const { formattedArticles, loading } = useArticlesStore();

  if (loading) {
    return (
      <div className="flex-1 max-w-[720px]">
        <div className="flex flex-col gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-start gap-8 animate-pulse">
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-zinc-200" />
                  <div className="h-3 w-28 bg-zinc-200 rounded" />
                </div>
                <div className="h-5 w-full bg-zinc-200 rounded" />
                <div className="h-4 w-full bg-zinc-100 rounded" />
                <div className="h-4 w-3/4 bg-zinc-100 rounded" />
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-3 w-16 bg-zinc-100 rounded" />
                  <div className="h-3 w-20 bg-zinc-100 rounded" />
                  <div className="h-5 w-14 bg-zinc-100 rounded-full" />
                </div>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-zinc-200 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-[720px]">
      <div className="flex flex-col gap-12">
        {formattedArticles.map((story, index) => (
          <Fragment key={story.id}>
            <article className="flex justify-between items-start gap-8 group">
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <img alt={story.author} className="w-5 h-5 rounded-full" src={story.authorImg}/>
                  <span className="font-label-sm text-label-sm text-zinc-900">{story.author}</span>
                  {story.inCategory && (
                    <>
                      <span className="text-zinc-300">in</span>
                      <span className="font-label-sm text-label-sm text-zinc-900">{story.inCategory}</span>
                    </>
                  )}
                </div>
                <h2 className="font-headline-h2 text-headline-h2 group-hover:opacity-80 transition-opacity">{story.title}</h2>
                <p className="font-body-md text-body-md text-zinc-500 line-clamp-3">{story.description}</p>
                <a href="/reading" className="text-secondary hover:underline font-label-sm">Read more</a>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <span className="font-label-sm text-label-sm text-zinc-400">{story.date}</span>
                    <span className="font-label-sm text-label-sm text-zinc-400">·</span>
                    <span className="font-label-sm text-label-sm text-zinc-400">{story.readTime}</span>
                    <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full font-label-sm text-[11px]">{story.topic}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-zinc-900">bookmark_add</span>
                    <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-zinc-900">do_not_disturb_on</span>
                  </div>
                </div>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                <img alt={story.topic} className="w-full h-full object-cover rounded-sm" src={story.image}/>
              </div>
            </article>
            {index < formattedArticles.length - 1 && <hr className="border-zinc-100"/>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
