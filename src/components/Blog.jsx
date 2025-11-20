// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The One Bug That Broke the Internet: A Deep Dive Into Cloudflare’s Global Failure",
      excerpt: "The Configuration Change That Triggered the Outage",
      date: "November 20, 2025",
      category: "Cloudflare, Database Systems, Cybersecurity, Tech News",
      readTime: "4 min read",
      link: "https://medium.com/@kaifazmi8573/the-one-bug-that-broke-the-internet-a-deep-dive-into-cloudflares-global-failure-58c7cfcd2ede", // Add your blog post URL here
    },
  ];

  return (
    <section id="blog" className="section-padding-regular">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 mb-3 sm:mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all hover:border-zinc-600/50"
            >
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-[#229cef]/20 text-[#229cef] rounded-lg border border-[#229cef]/30">
                      {post.category}
                    </span>
                    <span className="text-zinc-500 text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-zinc-50 font-semibold text-xl sm:text-2xl mb-3 group-hover:text-[#229cef] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm sm:text-base mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-xs sm:text-sm">
                      {post.date}
                    </span>
                    <span className="text-[#229cef] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

