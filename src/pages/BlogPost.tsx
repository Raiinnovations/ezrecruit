import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
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

      <div className="pt-24 lg:pt-32">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blog</span>
            </Link>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side - Fixed on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-[45%] lg:sticky lg:top-28 lg:self-start"
            >
              {/* Title & Meta - Now on top */}
              <div className="space-y-4 mb-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full uppercase tracking-wider">
                  {post.category}
                </span>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User size={14} className="text-primary" />
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* Share Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="mt-2 gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Share2 size={14} />
                  Share Article
                </Button>
              </div>

              {/* Featured Image - Now below heading */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-[55%] pb-16"
            >
              {/* Content Card */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8 lg:p-10 shadow-lg">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/30
                    prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed
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

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-primary rounded-full" />
                    Related Articles
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="group"
                      >
                        <div className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-4">
                            <span className="text-xs text-primary font-medium uppercase tracking-wider">
                              {relatedPost.category}
                            </span>
                            <h3 className="font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-2">
                              {relatedPost.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
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
