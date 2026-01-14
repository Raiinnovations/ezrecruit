import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 lg:pt-28">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blog</span>
            </Link>
          </motion.div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Side - Image (Sticky) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-[45%] lg:sticky lg:top-24 lg:self-start"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Floating Category Badge on Image */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-4 py-1.5 text-xs font-bold bg-primary text-primary-foreground rounded-full uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:w-[55%] pb-16"
            >
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gradient">
                {post.title}
              </h1>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{post.author}</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <span className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-primary" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-primary" />
                  {post.readTime}
                </span>
              </div>

              {/* Share Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="mb-8 gap-2 rounded-full px-5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Share2 size={15} />
                Share Article
              </Button>

              {/* Content Card */}
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full hidden lg:block" />
                
                <div className="bg-card/60 backdrop-blur-md rounded-2xl border border-border/40 p-6 md:p-8 lg:p-10 shadow-xl">
                  {/* Reading indicator */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6 pb-4 border-b border-border/30">
                    <BookOpen size={14} className="text-primary" />
                    <span>Article Content</span>
                  </div>
                  
                  <div 
                    className="prose prose-lg dark:prose-invert max-w-none
                      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                      prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-primary/20
                      prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-primary
                      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base
                      prose-li:text-muted-foreground prose-li:marker:text-primary
                      prose-strong:text-foreground prose-strong:font-semibold"
                  >
                    <div 
                      className="blog-content"
                      dangerouslySetInnerHTML={{ 
                        __html: post.content
                          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                          .replace(/^\*\*(.*)\*\*$/gm, '<p><strong>$1</strong></p>')
                          .replace(/^- (.*$)/gm, '<li>$1</li>')
                          .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="space-y-2 my-4">$&</ul>')
                          .replace(/^(?!<[hpul]|<li)(.*$)/gm, (match) => {
                            if (match.trim() && !match.startsWith('<')) {
                              return `<p>${match}</p>`;
                            }
                            return match;
                          })
                      }} 
                    />
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-14"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-10 h-0.5 bg-primary rounded-full" />
                    <h2 className="text-xl font-bold uppercase tracking-wider text-muted-foreground">
                      Related Articles
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {relatedPosts.map((relatedPost, index) => (
                      <motion.div
                        key={relatedPost.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <Link
                          to={`/blog/${relatedPost.id}`}
                          className="group block"
                        >
                          <div className="bg-card/60 backdrop-blur-sm rounded-xl overflow-hidden border border-border/40 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-5">
                              <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                                {relatedPost.category}
                              </span>
                              <h3 className="font-bold mt-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                {relatedPost.title}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5">
                                <Clock size={12} />
                                {relatedPost.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BlogPost;
